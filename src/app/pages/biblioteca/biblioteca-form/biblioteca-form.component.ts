import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opcoes } from './model/opcoes';

@Component({
  selector: 'app-biblioteca-form',
  templateUrl: './biblioteca-form.component.html',
  styleUrls: ['./biblioteca-form.component.scss']
})
export class BibliotecaFormComponent implements OnInit {
  readonly baseRouter = '/biblioteca/form';
  codigoBiblioteca!: number;
  desabilitarRotas!: boolean;

  opcoes: Opcoes[] = [
    { titulo: 'Sobre', descricao: 'Informações sobre a biblioteca', icone: 'borderless-table', rota: `${this.baseRouter}/sobre` },
    { titulo: 'Apoios', descricao: 'Apoios recebidos pela biblioteca', icone: 'reconciliation', rota: `${this.baseRouter}/apoio-recebido` },
    { titulo: 'Funcionamento', descricao: 'Horários de funcionamento', icone: 'calendar', rota: `${this.baseRouter}/horario-funcionamento` },
    { titulo: 'Acesso', descricao: 'Formas de acesso a biblioteca', icone: 'select', rota: `${this.baseRouter}/acesso` },
    { titulo: 'Serviços', descricao: 'Serviços disponibilizados', icone: 'wallet', rota: `${this.baseRouter}/servico` },
    { titulo: 'Acervos', descricao: 'Acervos disponibilizados', icone: 'container', rota: `${this.baseRouter}/acervo` },
    { titulo: 'Equipamentos', descricao: 'Equipamentos disponibilizados', icone: 'desktop', rota: `${this.baseRouter}/equipamento` },
    //{ titulo: 'Perfil do Leitor', descricao: '', icone: '' },
    { titulo: 'Responsáveis', descricao: 'Responsáveis pela biblioteca', icone: 'team', rota: `${this.baseRouter}/responsavel` },
  ];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.codigoBiblioteca = params.codigoBiblioteca;
      this.desabilitarRotas = !params.codigoBiblioteca;
    });
  }

  isActiveRouter(rota: string | undefined): boolean {
    const _rota = this.codigoBiblioteca ? `${rota}?codigoBiblioteca=${this.codigoBiblioteca}` : rota;
    return this._router.url === _rota;
  }

  proximaRota(rota: string | undefined): void {
    this._router.navigate([rota], { queryParams: { codigoBiblioteca: this.codigoBiblioteca } });
  }
}
