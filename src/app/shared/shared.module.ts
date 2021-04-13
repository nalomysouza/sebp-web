import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconsProviderModule } from './icons-provider.module';
import { BooleanPtbrPipe } from './pipes/boolean-ptbr.pipe';
import { EnderecoPipe } from './pipes/endereco.pipe';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

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
  NzDropDownModule,
  NzDrawerModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzPageHeaderModule,
  NzButtonModule,
  NzBreadCrumbModule,
  NzSelectModule,
  NzDatePickerModule,
  NzInputModule,
  IconsProviderModule,
  FormsModule,
  EnderecoPipe,
  BooleanPtbrPipe
]

@NgModule({
  declarations: [EnderecoPipe, BooleanPtbrPipe],
  imports: [
    CommonModule,
  ],
  exports: MODULES,
})
export class SharedModule { }
