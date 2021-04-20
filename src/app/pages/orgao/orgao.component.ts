import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { OrgaoService } from 'src/app/shared/services/orgao.service';
@Component({
  selector: 'app-orgao',
  templateUrl: './orgao.component.html',
  styleUrls: ['./orgao.component.scss']
})
export class OrgaoComponent implements OnInit {
  orgaos: Orgao[] = [];
  loading = false;
  /** Search */
  searchValue = '';
  searchVisible = false;
  /**Constants */
  readonly NOT_EXIST = 'NÃO INFORMADO';

  constructor(private _router: Router, private _orgaoService: OrgaoService) { }

  ngOnInit(): void {
    this.buscar();
  }

  /**
   * Modifica o status do orgão,seja habilitado ou desabilitado.
   * @param selected
   */
  onChangeEnabled(selected: Orgao) {
    this.loading = true;
    this._orgaoService.updateEnabled(selected)
      .pipe(first())
      .subscribe(() => {
        this.orgaos = [];
        this.buscar();
      }).add(() => this.loading = false);

  }

  /**
   * Realiza uma busca por todos os orgãos registrados.
   */
  buscar() {
    this.loading = true;
    this._orgaoService.readAll()
      .pipe(first())
      .subscribe(b => this.orgaos = b)
      .add(() => this.loading = false);
  }

  /**
   * Reseta o texto inserido na busca pelo nome do orgão e realiza uma busca geral no final.
   */
  reset(): void {
    this.searchValue = '';
    this.searchVisible = false;
    this.buscar();
  }

  /**
   * Realiza uma busca de orgão de acordo com o texto do nome de órgão informado.
   */
  search(): void {
    this.searchVisible = false;
    this.orgaos = this.orgaos
      .filter((i: Orgao) => i?.nome?.toLocaleUpperCase()
        .indexOf(this.searchValue.toLocaleUpperCase()) !== -1);
  }
}
