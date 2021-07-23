import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanPtbrPipe } from './boolean-ptbr.pipe';
import { EnderecoPipe } from './endereco.pipe';

const EXPORTS = [
  BooleanPtbrPipe,
  EnderecoPipe,
]
@NgModule({
  declarations: [EXPORTS],
  imports: [
    CommonModule
  ],
  exports: [EXPORTS]
})
export class PipesModule { }
