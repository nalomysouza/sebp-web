import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SebpBreadcrumbModule } from '@app/shared/components/sebp-breadcrumb/sebp-breadcrumb.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BibliotecaFormModule } from './biblioteca-form/biblioteca-form.module';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';

@NgModule({
  declarations: [BibliotecaComponent],
  imports: [
    CommonModule,
    FormsModule,
    BibliotecaRoutingModule,
    SebpBreadcrumbModule,
    BibliotecaFormModule,

    NzButtonModule,
    NzTableModule,
    NzPaginationModule,
    NzSwitchModule,
    NzToolTipModule,
    NzIconModule,
    NzModalModule,
    NzDropDownModule,
    NzDividerModule,
  ],
  exports: [BibliotecaComponent]
})
export class BibliotecaModule { }
