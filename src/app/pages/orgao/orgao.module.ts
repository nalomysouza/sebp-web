import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrgaoRoutingModule } from './orgao-routing.module';
import { OrgaoComponent } from './orgao.component';

@NgModule({
  declarations: [OrgaoComponent],
  imports: [
    CommonModule,
    OrgaoRoutingModule,
    SharedModule
  ]
})
export class OrgaoModule { }
