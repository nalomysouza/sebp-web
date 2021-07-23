import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { QuestionarioComponent } from './questionario/questionario.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: ':id/step-one', component: FormularioComponent },
  { path: ':id/step-two', component: QuestionarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepFormRoutingModule { }
