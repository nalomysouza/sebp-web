import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { Municipio } from 'src/app/shared/model/municipio.model';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { TipoBiblioteca } from 'src/app/shared/model/tipo-biblioteca.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';
import { OrgaoService } from 'src/app/shared/services/orgao.service';
import { ONLY_CHAR_AND_NUMBER, ONLY_MAIL, ONLY_NUMBER } from 'src/app/shared/utils/regex';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  loading = false;
  id!: string;
  isAddMode!: boolean;
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
    private _apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.loadDadosBase();
    this.createForm();
    this.loadForm();
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.pattern(ONLY_MAIL)]],
      dataFundacao: [null],
      atoCriacao: [''],
      telefone: [''],
      fax: [''],
      sigla: [''],
      bibliotecaPolo: false,
      implantadaPeloPLA: false,
      cadastroSNBP: false,
      anoCadastroSNBP: null,
      orgao: this.fb.group({
        id: [null, Validators.required]
      }),
      tipoBiblioteca: this.fb.group({
        id: [null, Validators.required]
      }),
      endereco: this.fb.group({
        logradouro: ['', [Validators.minLength(2), Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
        numero: ['', [Validators.pattern(ONLY_NUMBER)]],
        complemento: ['', [Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
        bairro: ['', [Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
        cep: [''],
        municipio: this.fb.group({
          id: [null, Validators.required]
        })
      }),
      observacoes: ['', [Validators.required]]
    });
  }

  loadDadosBase() {
    this._orgaoService.all().pipe(first()).subscribe(x => this.orgaos = x);
    this._apiService.getTiposBiliotecas().pipe(first()).subscribe(x => this.tiposBibliotecas = x);
    this._apiService.getMunicipios().pipe(first()).subscribe(x => this.municipios = x);
  }

  loadForm() {
    if (!this.isAddMode) {
      this._bibliotecaService.findById(Number.parseInt(this.id))
        .pipe(first()).subscribe(x => this.form.patchValue(x));
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
      //this.alertService.success('User added', { keepAfterRouteChange: true });
      this.nextUrl(created.id);
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
    this._router.navigate([`/biblioteca/form/${id}/step-two`], { relativeTo: this._activatedRoute });
  }

}
