import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooleanPtBrPipe } from './boolean-ptbr.pipe';

const EXPORTS = [
  BooleanPtBrPipe,
]
@NgModule({
  declarations: [EXPORTS],
  imports: [
    CommonModule
  ],
  exports: [EXPORTS]
})
export class PipesModule { }
