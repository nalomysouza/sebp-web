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
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { FormularioComponent } from './formulario/formulario.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [BibliotecaComponent, FormularioComponent, QuestionarioComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
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
    NzTableModule,
    NzPaginationModule,
    NzSwitchModule,
    NzToolTipModule,
    NzDropDownModule,
    NzCardModule,
    NzIconModule,
    NzDividerModule,
    NzInputNumberModule,
    NzModalModule
  ],
  exports: [BibliotecaComponent, FormularioComponent, QuestionarioComponent]
})
export class BibliotecaModule { }
