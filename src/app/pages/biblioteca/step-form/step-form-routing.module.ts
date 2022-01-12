import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  { path: ':id/step-two', component: StepTwoComponent },
  { path: ':id/step-three', component: StepThreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepFormRoutingModule { }
