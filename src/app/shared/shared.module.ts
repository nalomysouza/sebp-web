import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { IconsProviderModule } from './icons-provider.module';
import { ResourceService } from './services/resource.service';

const MODULES = [
  NzFormModule,
  NzLayoutModule,
  NzMenuModule,
  NzMessageModule,
  IconsProviderModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: MODULES,
})
export class SharedModule { }
