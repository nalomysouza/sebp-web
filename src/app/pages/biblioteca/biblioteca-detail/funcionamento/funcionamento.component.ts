import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecaService } from '@app/shared/services/biblioteca.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-biblioteca-detail-funcionamento',
  templateUrl: './funcionamento.component.html',
  styleUrls: ['./funcionamento.component.scss']
})
export class FuncionamentoComponent implements OnInit {

  id!: string;
  loading = false;
  horarioFuncionamento!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bibliotecaService: BibliotecaService,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.load();
  }

  load(): void {
    this.bibliotecaService
      .findApoioRecebidoByBiblioteca(Number.parseInt(this.id))
      .pipe(first())
      .subscribe(a => this.horarioFuncionamento = a);
  }

  onSave() {
  }

}
