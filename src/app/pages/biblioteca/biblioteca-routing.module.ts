import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca.component';

const routes: Routes = [
  { path: '', component: BibliotecaComponent },
  { path: 'form', loadChildren: () => import('./biblioteca-form/biblioteca-form.module').then(m => m.BibliotecaFormModule) },
  // { path: ':id/detail', component: BibliotecaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
