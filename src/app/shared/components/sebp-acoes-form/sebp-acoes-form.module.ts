import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SebpAcoesFormComponent } from './sebp-acoes-form.component';

@NgModule({
  declarations: [
    SebpAcoesFormComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzDividerModule,
    NzGridModule
  ],
  exports: [
    SebpAcoesFormComponent
  ]
})
export class SebpAcoesFormModule { }
