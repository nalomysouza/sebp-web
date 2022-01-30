import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaFormComponent } from './biblioteca-form.component';

const routes: Routes = [
  { path: '', component: BibliotecaFormComponent },
  { path: ':id', component: BibliotecaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaFormRoutingModule { }
