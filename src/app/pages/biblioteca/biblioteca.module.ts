import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SebpBreadcrumbModule } from '@app/shared/components/sebp-breadcrumb/sebp-breadcrumb.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AcervoComponent } from './biblioteca-detail/acervo/acervo.component';
import { ApoioRecebidoComponent } from './biblioteca-detail/apoio-recebido/apoio-recebido.component';
import { BibliotecaDetailComponent } from './biblioteca-detail/biblioteca-detail.component';
import { EquipamentoComponent } from './biblioteca-detail/equipamento/equipamento.component';
import { FormaAcessoComponent } from './biblioteca-detail/forma-acesso/forma-acesso.component';
import { FuncionamentoComponent } from './biblioteca-detail/funcionamento/funcionamento.component';
import { LeitorComponent } from './biblioteca-detail/leitor/leitor.component';
import { ResponsavelComponent } from './biblioteca-detail/responsavel/responsavel.component';
import { ServicoComponent } from './biblioteca-detail/servico/servico.component';
import { SobreComponent } from './biblioteca-detail/sobre/sobre.component';
import { BibliotecaFormComponent } from './biblioteca-form/biblioteca-form.component';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';

@NgModule({
  declarations: [BibliotecaComponent, BibliotecaFormComponent, BibliotecaDetailComponent, SobreComponent, ApoioRecebidoComponent, FuncionamentoComponent, FormaAcessoComponent, ServicoComponent, AcervoComponent, ResponsavelComponent, EquipamentoComponent, LeitorComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    NgxMaskModule.forRoot(),
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    SebpBreadcrumbModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputModule,
    NzListModule,
    NzTableModule,
    NzPaginationModule,
    NzSwitchModule,
    NzToolTipModule,
    NzDropDownModule,
    NzCardModule,
    NzIconModule,
    NzDividerModule,
    NzInputNumberModule,
    NzModalModule,
    NzMessageModule,
    NzTypographyModule,
    NzStatisticModule,
    NzDescriptionsModule,
  ],
  exports: [BibliotecaComponent]
})
export class BibliotecaModule { }
