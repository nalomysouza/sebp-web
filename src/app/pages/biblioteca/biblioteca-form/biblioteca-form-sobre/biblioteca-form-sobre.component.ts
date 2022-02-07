import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Biblioteca } from '@app/shared/model/biblioteca.model';
import { Municipio } from '@app/shared/model/municipio.model';
import { Orgao } from '@app/shared/model/orgao.model';
import { TipoBiblioteca } from '@app/shared/model/tipo-biblioteca.model';
import { BibliotecaService } from '@app/shared/services/biblioteca.service';
import { HelpService } from '@app/shared/services/help.service';
import { OrgaoService } from '@app/shared/services/orgao.service';
import { ATUALIZAR, REGISTRAR } from '@app/shared/utils/constants';
import { ONLY_CHAR_AND_NUMBER, ONLY_MAIL, ONLY_NUMBER } from '@app/shared/utils/regex';
import { NzMessageService } from 'ng-zorro-antd/message';
import { first } from 'rxjs';

@Component({
  selector: 'app-biblioteca-form-sobre',
  templateUrl: './biblioteca-form-sobre.component.html',
  styleUrls: ['./biblioteca-form-sobre.component.scss']
})
export class BibliotecaFormSobreComponent implements OnInit {

  codigoBiblioteca!: string;
  isAddMode!: boolean;
  loading!: boolean;
  form!: FormGroup;
  orgaos!: Orgao[];
  municipios!: Municipio[];
  tiposBibliotecas!: TipoBiblioteca[];

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _bibliotecaService: BibliotecaService,
    private _orgaoService: OrgaoService,
    private _apiService: HelpService,
    private _messageService: NzMessageService) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.codigoBiblioteca = params.codigoBiblioteca;
      this.isAddMode = !this.codigoBiblioteca;
    });
    this.loadDadosBase();
    this.createForm();
    this.loadForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sigla: [''],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(ONLY_MAIL)]],
      dataFundacao: [null],
      atoCriacao: [''],
      telefone: [''],
      fax: [''],
      polo: false,
      implantadaPeloPLA: false,
      cadastroSNBP: false,
      anoCadastroSNBP: null,
      orgao: [null, Validators.required],
      tipoBiblioteca: [null, Validators.required],
      logradouro: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(ONLY_CHAR_AND_NUMBER)]
      ],
      numero: [null, [Validators.pattern(ONLY_NUMBER)]],
      complemento: ['', [Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
      bairro: ['', [Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
      cep: [''],
      municipio: [null, Validators.required],
      observacoes: ['', Validators.required]
    });
  }

  loadDadosBase() {
    this._orgaoService.all().pipe(first()).subscribe(x => this.orgaos = x);
    this._apiService.getTiposBiliotecas().pipe(first()).subscribe(x => this.tiposBibliotecas = x);
    this._apiService.getMunicipios().pipe(first()).subscribe(x => this.municipios = x);
  }

  loadForm() {
    if (!this.isAddMode) {
      this._bibliotecaService
        .findById(Number.parseInt(this.codigoBiblioteca))
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }
  }

  onSubmit(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if (this.form.valid) {
      this.loading = true;
      this.isAddMode ? this.create() : this.update();
    }
  }

  create() {
    let biblioteca = Object.assign(new Biblioteca(), this.form.value);
    this._bibliotecaService.save(biblioteca)
      .pipe(first())
      .subscribe((created) => {
        this._messageService.success(`${REGISTRAR.SUCESSO} biblioteca ${created.nome}`);
        this.nextUrl(created.id);
      }, (error) => {
        this._messageService.error(`${REGISTRAR.ERRO} biblioteca`);
        console.error(`${REGISTRAR.ERRO} biblioteca: `, error);
      })
      .add(() => this.loading = false);
  }

  update() {
    let biblioteca = Object.assign(new Biblioteca(), this.form.value);
    this._bibliotecaService.update(Number.parseInt(this.codigoBiblioteca), biblioteca).pipe(first()).subscribe((updated) => {
      this._messageService.success(`${ATUALIZAR.SUCESSO} biblioteca ${updated.nome}`);
      this.nextUrl(updated.id);
    })
      .add(() => this.loading = false);
  }

  nextUrl(codigoBiblioteca: number | undefined): void {
    if (!codigoBiblioteca) throw new Error('codigoBiblioteca não informado');
    this._router.navigate([`/biblioteca/form/apoio-recebido`], { queryParams: { codigoBiblioteca: codigoBiblioteca }, queryParamsHandling: 'merge' });
  }

  compareValue(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }

}
