import { Component, OnInit } from '@angular/core';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { Pageable } from 'src/app/shared/model/helpers/pageable.model';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  constructor(private _bibliotecaService: BibliotecaService) { }
  bibPageable: Pageable<Biblioteca> = new Pageable<Biblioteca>();

  ngOnInit(): void {
    this.buscar();
  }

  onPageIndexChange(pageIndex: any) {
    this.bibPageable.number = pageIndex;
    this.buscar();
  }

  buscar() {
    //this._bibliotecaService.readAll().subscribe(b => this.bibliotecas = b);
    this._bibliotecaService.readAllPageable(this.bibPageable.number, this.bibPageable.size)
      .subscribe(b => this.bibPageable = b);
  }
}
