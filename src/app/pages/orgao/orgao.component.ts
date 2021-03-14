import { Component, OnInit } from '@angular/core';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { OrgaoService } from 'src/app/shared/services/orgao.service';
@Component({
  selector: 'app-orgao',
  templateUrl: './orgao.component.html',
  styleUrls: ['./orgao.component.scss']
})
export class OrgaoComponent implements OnInit {
  constructor(private _orgaoService: OrgaoService) { }
  orgaos: Orgao[] = [];
  NOT_EXIST: string = 'Não Informado';
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.buscar();
    this.loading = false;
  }

  onChangeEnabled(selected: Orgao) {
    this.loading = true;
    this._orgaoService.updateEnabled(selected).subscribe(() => {
      this.orgaos = [];
      this.buscar();
    });
    this.loading = false;
  }

  buscar() {
    this._orgaoService.readAll().subscribe(b => this.orgaos = b);
  }

  /** Search */
  searchValue = '';
  visible = false;

  reset(): void {
    this.searchValue = '';
    this.visible = false;
    this.buscar();
  }

  search(): void {
    this.visible = false;
    this.orgaos = this.orgaos
      .filter((i: Orgao) => i?.nome?.toLocaleUpperCase()
      .indexOf(this.searchValue.toLocaleUpperCase()) !== -1);
  }

}
