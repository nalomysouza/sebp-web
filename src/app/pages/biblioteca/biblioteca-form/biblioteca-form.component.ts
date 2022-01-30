import { Component, OnInit } from '@angular/core';
import { Opcoes } from './model/opcoes';

@Component({
  selector: 'app-biblioteca-form',
  templateUrl: './biblioteca-form.component.html',
  styleUrls: ['./biblioteca-form.component.scss']
})
export class BibliotecaFormComponent implements OnInit {
  opcoes: Opcoes[] = [
    { titulo: 'Sobre', descricao: 'Informações sobre a biblioteca', icone: '' },
    { titulo: 'Apoios', descricao: 'Apoios recebidos pela biblioteca', icone: '' },
    { titulo: 'Funcionamento', descricao: 'Horários de funcionamento', icone: 'calendar' },
    { titulo: 'Acesso', descricao: 'Formas de acesso a biblioteca', icone: '' },
    { titulo: 'Serviços', descricao: 'Serviços disponibilizados', icone: '' },
    { titulo: 'Acervos', descricao: 'Acervos disponibilizados', icone: '' },
    { titulo: 'Equipamentos', descricao: 'Equipamentos disponibilizados', icone: '' },
    //{ titulo: 'Perfil do Leitor', descricao: '', icone: '' },
    { titulo: 'Responsáveis', descricao: 'Responsáveis diretos pela biblioteca', icone: '' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
