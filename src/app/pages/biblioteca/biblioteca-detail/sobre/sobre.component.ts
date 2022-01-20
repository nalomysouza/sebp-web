import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';

@Component({
  selector: 'app-biblioteca-detail-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  id!: string;
  loading!: boolean;
  biblioteca!: Biblioteca;

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
      .findById(Number.parseInt(this.id))
      .pipe(first())
      .subscribe(b => this.biblioteca = b);
  }

  onSave() {
  }

}
