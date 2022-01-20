import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApoioRecebido } from '@app/shared/model/apoio-recebido.model';
import { ApoioRecebidoService } from '@app/shared/services/apoio-recebido.service';
import { BibliotecaService } from '@app/shared/services/biblioteca.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-biblioteca-detail-apoio-recebido',
  templateUrl: './apoio-recebido.component.html',
  styleUrls: ['./apoio-recebido.component.scss']
})
export class ApoioRecebidoComponent implements OnInit {

  id!: string;
  loading = false;
  apoioRecebido!: ApoioRecebido;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bibliotecaService: BibliotecaService,
    private apoioRecebidoService: ApoioRecebidoService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.load();
  }

  load(): void {
    this.bibliotecaService
      .findApoioRecebidoByBiblioteca(Number.parseInt(this.id))
      .pipe(first())
      .subscribe(a => this.apoioRecebido = a);
  }

  onSave() {
  }
}
