import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBibliotecaComponent } from './dash-biblioteca.component';

const routes: Routes = [{ path: '', component: DashBibliotecaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBibliotecaRoutingModule { }
