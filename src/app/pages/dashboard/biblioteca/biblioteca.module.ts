import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { FormComponent } from './form/form.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
@NgModule({
  declarations: [BibliotecaComponent, FormComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    NgxMaskModule.forRoot(),
    NzInputNumberModule,
    SharedModule,
  ],
  exports: [BibliotecaComponent, FormComponent]
})
export class BibliotecaModule { }
