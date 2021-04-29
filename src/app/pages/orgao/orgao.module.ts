import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrgaoRoutingModule } from './orgao-routing.module';
import { OrgaoComponent } from './orgao.component';
import { FormComponent } from './form/form.component';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [OrgaoComponent, FormComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    OrgaoRoutingModule,
    SharedModule,
  ]
})
export class OrgaoModule { }
