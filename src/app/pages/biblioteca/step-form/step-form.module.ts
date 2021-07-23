import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { StepFormRoutingModule } from './step-form-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [FormularioComponent, QuestionarioComponent],
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
  ],
  exports: [FormularioComponent, QuestionarioComponent]
})
export class StepFormModule { }
