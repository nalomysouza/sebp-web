import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { DashBibliotecaRoutingModule } from './dash-biblioteca-routing.module';
import { DashBibliotecaComponent } from './dash-biblioteca.component';
import { NzCardModule } from 'ng-zorro-antd/card';
@NgModule({
  declarations: [
    DashBibliotecaComponent
  ],
  imports: [
    CommonModule,
    DashBibliotecaRoutingModule,
    ScrollingModule,
    NzCardModule,
    NzTabsModule,
    NzListModule,
    NzAvatarModule,
    NzSkeletonModule
  ],
  exports: [
    DashBibliotecaComponent
  ]
})
export class DashBibliotecaModule { }
