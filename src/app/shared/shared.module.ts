import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { IconsProviderModule } from './icons-provider.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

const MODULES = [
  NzFormModule,
  NzLayoutModule,
  NzMenuModule,
  NzMessageModule,
  NzCardModule,
  NzAvatarModule,
  NzGridModule,
  NzListModule,
  NzPaginationModule,
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
