import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { first } from 'rxjs/operators';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  bibliotecas: Biblioteca[] = [];
  loading = false;
  /** Search */
  searchValue = '';
  searchVisible = false;
  /**Constants */
  readonly NOT_EXIST = 'NÃO INFORMADO';

  constructor(
    private modal: NzModalService,
    private message: NzMessageService,
    private _bibliotecaService: BibliotecaService,
  ) { }

  ngOnInit(): void {
    this.buscar();
  }

  /**
   * Modifica o status do orgão,seja habilitado ou desabilitado.
   * @param selected
   */
  onChangeEnabled(selected: Biblioteca) {
    this.loading = true;
    this._bibliotecaService.enabledOrDisabled(selected)
      .pipe(first())
      .subscribe(() => {
        this.bibliotecas = [];
        this.buscar();
      }).add(() => this.loading = false);
  }

  /**
   * Realiza uma busca por todos os orgãos registrados.
   */
  buscar() {
    this.loading = true;
    this._bibliotecaService.all().pipe(first())
      .subscribe(b => this.bibliotecas = b)
      .add(() => this.loading = false);
  }

  showDeleteConfirm(selected: Biblioteca): void {
    this.modal.confirm({
      nzTitle: 'Você deseja deletar esta biblioteca?',
      nzContent: `<b style="color: red;">${selected.id} - ${selected.nome}</b>`,
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletar(selected),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  deletar(deleted: Biblioteca) {
    this.loading = true;
    this._bibliotecaService.delete(deleted.id)
      .pipe(first())
      .subscribe(() => {
        this.message.success(`Exclusão realizada com sucesso. Biblioteca : ${deleted.id} - ${deleted.nome}`);
        this.buscar()
      })
      .add(() => this.loading = false)
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
   * Realiza uma busca de orgão de acordo com o texto do nome de biblioteca informado.
   */
  search(): void {
    this.searchVisible = false;
    this.bibliotecas = this.bibliotecas
      .filter((i: Biblioteca) => i?.nome?.toLocaleUpperCase()
        .indexOf(this.searchValue.toLocaleUpperCase()) !== -1);
  }

  get routerNext(): string {
    return '/biblioteca/form/sobre';
  }
}
