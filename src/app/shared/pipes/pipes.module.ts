import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooleanPtbrPipe } from './boolean-ptbr.pipe';

const EXPORTS = [
  BooleanPtbrPipe,
]
@NgModule({
  declarations: [EXPORTS],
  imports: [
    CommonModule
  ],
  exports: [EXPORTS]
})
export class PipesModule { }
