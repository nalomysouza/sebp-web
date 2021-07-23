import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/_helpers/auth.guard';
import { BibliotecaComponent } from './biblioteca.component';

const routes: Routes = [
  { path: '', component: BibliotecaComponent },
  { path: 'form', canActivate: [AuthGuard], loadChildren: () => import('./step-form/step-form.module').then(m => m.StepFormModule) },
  //{ path: 'add', component: FormularioComponent },
  //{ path: 'edit/:id', component: QuestionarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
