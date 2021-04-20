import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { OrgaoComponent } from './orgao.component';

const routes: Routes = [
  { path: '', component: OrgaoComponent },
  { path: 'add', component: FormComponent },
  { path: 'edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgaoRoutingModule { }
