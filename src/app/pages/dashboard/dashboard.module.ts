import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { DashboardComponent } from './dashboard.component';
import { IconsProviderModule } from 'src/app/layout/icons-provider.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BibliotecaModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
