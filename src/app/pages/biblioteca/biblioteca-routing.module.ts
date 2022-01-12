import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaDetailComponent } from './biblioteca-detail/biblioteca-detail.component';
import { BibliotecaFormComponent } from './biblioteca-form/biblioteca-form.component';
import { BibliotecaComponent } from './biblioteca.component';

const routes: Routes = [
  { path: '', component: BibliotecaComponent },
  { path: 'form', component: BibliotecaFormComponent },
  { path: ':id/detail', component: BibliotecaDetailComponent }
  //{ path: 'form', canActivate: [AuthGuard], loadChildren: () => import('./step-form/step-form.module').then(m => m.StepFormModule) },
  //{ path: 'add', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
