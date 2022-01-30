import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SebpAcoesFormModule } from '@app/shared/components/sebp-acoes-form/sebp-acoes-form.module';
import { SebpBreadcrumbModule } from '@app/shared/components/sebp-breadcrumb/sebp-breadcrumb.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgxMaskModule } from 'ngx-mask';
import { BibliotecaFormRoutingModule } from './biblioteca-form-routing.module';
import { BibliotecaFormComponent } from './biblioteca-form.component';

@NgModule({
  declarations: [BibliotecaFormComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    SebpAcoesFormModule,
    SebpBreadcrumbModule,
    BibliotecaFormRoutingModule,

    NzListModule,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    NzMessageModule,
    NzIconModule
  ],
  exports: [
    BibliotecaFormComponent
  ]
})
export class BibliotecaFormModule { }
