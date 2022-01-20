import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Acervo } from '@app/shared/model/acervo.model';
import { BibliotecaService } from '@app/shared/services/biblioteca.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.scss']
})
export class AcervoComponent implements OnInit {

  id!: string;
  loading = false;
  acervo!: Acervo;

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
      .findAcervoByBiblioteca(Number.parseInt(this.id))
      .pipe(first())
      .subscribe(a => this.acervo = a);
  }

  onSave() {
  }


}
