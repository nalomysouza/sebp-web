import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { IconsProviderModule } from './icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { EnderecoPipe } from './pipes/endereco.pipe';

const MODULES = [
  NzFormModule,
  NzIconModule,
  NzSliderModule,
  NzLayoutModule,
  NzMenuModule,
  NzMessageModule,
  NzCardModule,
  NzAvatarModule,
  NzGridModule,
  NzListModule,
  NzTableModule,
  NzPaginationModule,
  NzSwitchModule,
  NzToolTipModule,
  IconsProviderModule,
  NzDropDownModule,
  NzDrawerModule,
  FormsModule,
  EnderecoPipe
]

@NgModule({
  declarations: [EnderecoPipe],
  imports: [
    CommonModule,
  ],
  exports: MODULES,
})
export class SharedModule { }
