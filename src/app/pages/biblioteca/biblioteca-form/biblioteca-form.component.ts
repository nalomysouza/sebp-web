import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { Municipio } from 'src/app/shared/model/municipio.model';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { TipoBiblioteca } from 'src/app/shared/model/tipo-biblioteca.model';
import { HelpService } from 'src/app/shared/services/help.service';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';
import { OrgaoService } from 'src/app/shared/services/orgao.service';
import { ONLY_CHAR_AND_NUMBER, ONLY_MAIL, ONLY_NUMBER } from 'src/app/shared/utils/regex';
import { NzMessageService } from 'ng-zorro-antd/message';
import { REGISTRAR } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-biblioteca-form',
  templateUrl: './biblioteca-form.component.html',
  styleUrls: ['./biblioteca-form.component.scss']
})
export class BibliotecaFormComponent implements OnInit {

  id!: string;
  isAddMode!: boolean;
  loading = false;
  readonly entity = 'biblioteca';

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
    this.id = this._activatedRoute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.loadDadosBase();
    this.createForm();
    this.loadForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(ONLY_MAIL)]],
      dataFundacao: [null],
      atoCriacao: [''],
      telefone: [''],
      fax: [''],
      sigla: [''],
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
        .findById(Number.parseInt(this.id))
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
    this._bibliotecaService.save(biblioteca).pipe(first()).subscribe((created) => {
      this._messageService.success(`${REGISTRAR.SUCESSO} ${this.entity} ${created.nome}`);
      this.nextUrl(created.id);
    }, (error) => {
      this._messageService.error(`${REGISTRAR.ERRO} ${this.entity}`);
      console.error(`${REGISTRAR.ERRO} ${this.entity}: `, error);
    })
      .add(() => this.loading = false);
  }

  update() {
    let biblioteca = Object.assign(new Biblioteca(), this.form.value);
    this._bibliotecaService.update(Number.parseInt(this.id), biblioteca).pipe(first()).subscribe((updated) => {
      //this.alertService.success('User updated', { keepAfterRouteChange: true });
      this.nextUrl(updated.id);
    })
      .add(() => this.loading = false);
  }

  nextUrl(id: number | undefined) {
    this._router.navigate([`/biblioteca/${id}/detail`], { relativeTo: this._activatedRoute });
  }

  compareValue(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }

}
