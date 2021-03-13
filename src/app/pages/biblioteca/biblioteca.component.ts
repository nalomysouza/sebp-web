import { Component, OnInit } from '@angular/core';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';
import { NzMarks } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  constructor(private _bibliotecaService: BibliotecaService) { }
  bibliotecas: Array<Biblioteca> = [];
  cols = 4;
  gutterCols = new Array(this.cols);

  ngOnInit(): void {
    this.readAll();
  }

  readAll() {
    this._bibliotecaService.readAll().subscribe(b => this.bibliotecas = b);
  }
}
