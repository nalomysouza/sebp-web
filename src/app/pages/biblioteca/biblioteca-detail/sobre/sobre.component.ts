import { Component, OnInit } from '@angular/core';
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
  loading = false;
  biblioteca = new Biblioteca();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _bibliotecaService: BibliotecaService,
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

      console.log('biblioteca', this.biblioteca)
  }
}
