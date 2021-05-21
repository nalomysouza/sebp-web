import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/_helpers/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/biblioteca' },
      { path: 'biblioteca', canActivate: [AuthGuard], loadChildren: () => import('./pages/biblioteca/biblioteca.module').then(m => m.BibliotecaModule) },
      { path: 'orgao', canActivate: [AuthGuard], loadChildren: () => import('./pages/orgao/orgao.module').then(m => m.OrgaoModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
