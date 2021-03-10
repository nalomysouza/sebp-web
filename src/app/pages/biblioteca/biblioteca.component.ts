import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  getMicrorregioes() {
    this.api.getMicrorregioes().subscribe(
      next => console.log(next)
    )
  }

  getMesorregioes() {
    this.api.getMesorregioes().subscribe(
      next => console.log(next)
    )
  }

  getMunicipios() {
    this.api.getMunicipios().subscribe(
      next => console.log(next)
    )
  }
}
