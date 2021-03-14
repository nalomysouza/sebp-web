import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BibliotecaDetalharComponent } from './biblioteca-detalhar/biblioteca-detalhar.component';


@NgModule({
  declarations: [BibliotecaComponent, BibliotecaDetalharComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    SharedModule
  ]
})
export class BibliotecaModule { }
