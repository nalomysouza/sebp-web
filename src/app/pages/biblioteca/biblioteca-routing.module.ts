import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: BibliotecaComponent },
  { path: 'add', component: FormComponent },
  { path: 'edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
