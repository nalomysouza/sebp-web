import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [BibliotecaComponent, FormComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    BibliotecaRoutingModule,
    SharedModule
  ]
})
export class BibliotecaModule { }
