import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/_helpers/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'biblioteca', canActivate: [AuthGuard], loadChildren: () => import('./biblioteca/biblioteca.module').then(m => m.BibliotecaModule) },
  //{ path: 'add', component: FormComponent },
  //{ path: 'edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
