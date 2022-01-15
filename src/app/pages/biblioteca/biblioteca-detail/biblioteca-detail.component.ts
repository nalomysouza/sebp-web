import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApoioRecebido } from '@app/shared/model/apoio-recebido.model';
import { Biblioteca } from '@app/shared/model/biblioteca.model';
import { ApoioRecebidoService } from '@app/shared/services/apoio-recebido.service';
import { BibliotecaService } from '@app/shared/services/biblioteca.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-biblioteca-detail',
  templateUrl: './biblioteca-detail.component.html',
  styleUrls: ['./biblioteca-detail.component.scss']
})
export class BibliotecaDetailComponent implements OnInit {

  id!: string;
  loading = false;
  biblioteca = new Biblioteca();
  apoioRecebido = new ApoioRecebido();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _bibliotecaService: BibliotecaService,
    private _apoioRecebidoService: ApoioRecebidoService
  ) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.load();
  }

  load() {
    this._bibliotecaService
      .findById(Number.parseInt(this.id))
      .pipe(first())
      .subscribe(b => this.biblioteca = b);

    this._apoioRecebidoService
      .findByBibliotecaId(Number.parseInt(this.id))
      .pipe(first())
      .subscribe(a => this.apoioRecebido = a);
  }

}
