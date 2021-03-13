import { Component, OnInit } from '@angular/core';
import { Pageable } from 'src/app/shared/model/helpers/pageable.model';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { OrgaoService } from 'src/app/shared/services/orgao.service';

@Component({
  selector: 'app-orgao',
  templateUrl: './orgao.component.html',
  styleUrls: ['./orgao.component.scss']
})
export class OrgaoComponent implements OnInit {
  constructor(private _orgaoService: OrgaoService) { }
  orgaoPageable: Pageable<Orgao> = new Pageable<Orgao>();

  ngOnInit(): void {
    this.buscar();
  }

  onChangeEnabled(event: any) {
    console.log('Event =>', event);
  }

  buscar() {
    this._orgaoService.readAllPageable(this.orgaoPageable.number, this.orgaoPageable.size)
      .subscribe(b => this.orgaoPageable = b);
  }

}
