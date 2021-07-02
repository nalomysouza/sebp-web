import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca.component';
import { FormularioComponent } from './formulario/formulario.component';
import { QuestionarioComponent } from './questionario/questionario.component';

const routes: Routes = [
  { path: '', component: BibliotecaComponent },
  { path: 'add', component: FormularioComponent },
  { path: 'edit/:id', component: QuestionarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
