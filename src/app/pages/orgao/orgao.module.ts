import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrgaoRoutingModule } from './orgao-routing.module';
import { OrgaoComponent } from './orgao.component';
import { FormComponent } from './form/form.component';
import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [OrgaoComponent, FormComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    OrgaoRoutingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputModule,
    NzListModule,
    NzTableModule,
    NzPaginationModule,
    NzSwitchModule,
    NzToolTipModule,
    NzDropDownModule,
    NzCardModule,
    NzIconModule,
    NzDividerModule,
    NzModalModule
  ]
})
export class OrgaoModule { }
