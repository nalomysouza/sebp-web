import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { StepFormRoutingModule } from './step-form-routing.module';
import { StepOneComponent } from './step-one/step-one.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepTwoComponent } from './step-two/step-two.component';

@NgModule({
  declarations: [StepOneComponent, StepTwoComponent, StepThreeComponent],
  imports: [
    CommonModule,
    StepFormRoutingModule,
    NgxMaskModule.forRoot(),
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputModule,
    NzListModule,
    NzSwitchModule,
    NzToolTipModule,
    NzDropDownModule,
    NzCardModule,
    NzIconModule,
    NzDividerModule,
    NzInputNumberModule,
    NzModalModule,
    NzStepsModule
  ],
  exports: [StepOneComponent, StepTwoComponent, StepThreeComponent]
})
export class StepFormModule { }
