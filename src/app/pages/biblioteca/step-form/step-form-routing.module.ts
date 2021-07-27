import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  { path: '', component: StepOneComponent },
  { path: ':id/step-one', component: StepOneComponent },
  { path: ':id/step-two', component: StepTwoComponent },
  { path: ':id/step-three', component: StepThreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepFormRoutingModule { }
