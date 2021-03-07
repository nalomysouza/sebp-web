import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
