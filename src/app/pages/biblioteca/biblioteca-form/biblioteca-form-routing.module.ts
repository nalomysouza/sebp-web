import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaFormSobreComponent } from './biblioteca-form-sobre/biblioteca-form-sobre.component';
import { BibliotecaFormComponent } from './biblioteca-form.component';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaFormComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sobre' },
      { path: 'sobre', component: BibliotecaFormSobreComponent },
      { path: 'apoio-recebido', component: BibliotecaFormSobreComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaFormRoutingModule { }
