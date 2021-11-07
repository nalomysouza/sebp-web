import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/_helpers/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
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
