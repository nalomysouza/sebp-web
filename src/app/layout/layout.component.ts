import { Component } from '@angular/core';

interface Menu {
  nome: string;
  icone: string;
  rota?: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  menus: Menu[] = [
    { nome: 'Biblioteca', icone: 'bank', rota: '/biblioteca' },
    { nome: 'Órgão', icone: 'apartment', rota: '/orgao' },
    { nome: 'Relatório', icone: 'file', rota: '/relatorio' }
  ]

  constructor() { }

}
