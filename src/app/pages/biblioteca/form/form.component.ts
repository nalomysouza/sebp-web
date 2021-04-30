import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { TipoBiblioteca } from 'src/app/shared/model/tipo-biblioteca.model';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';
import { OrgaoService } from 'src/app/shared/services/orgao.service';
import { ONLY_CHAR_AND_NUMBER, ONLY_MAIL, ONLY_NUMBER } from 'src/app/shared/utils/regex';

@Component({
  selector: 'app-form-biblioteca',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = '';
  loading = false;
  id!: string;
  isAddMode!: boolean;
  form!: FormGroup;
  orgaos!: Orgao[];
  tiposBibliotecas!: TipoBiblioteca[];

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _service: BibliotecaService,
    private _orgaoService: OrgaoService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.loadOrgaos();
    this.loadTiposOrgaos();
    this.createForm();
    this.loadForm();
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.pattern(ONLY_MAIL)]],
      dataFundacao: [''],
      atoCriacao: [''],
      telefone: [''],
      fax: [''],
      sigla: [''],
      bibliotecaPolo: false,
      implantadaPeloPLA: false,
      cadastroSNBP: false,
      anoCadastroSNBP: false,
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
      observacoes: ['', Validators.required]
    });
  }

  loadOrgaos() {
    this._orgaoService.all().pipe(first()).subscribe(x => this.orgaos = x);
  }

  loadTiposOrgaos() {
    this._orgaoService.all().pipe(first()).subscribe(x => this.orgaos = x);
  }

  loadForm() {
    this.title = `${this.isAddMode ? 'Registrando' : 'Atualizando'}`.concat(' Órgão');
    if (!this.isAddMode) {
      this._service.findById(Number.parseInt(this.id)).pipe(first()).subscribe(x => this.form.patchValue(x));
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
    this._service.save(biblioteca).pipe(first()).subscribe(() => {
      //this.alertService.success('User added', { keepAfterRouteChange: true });
      this.redirecToList();
    })
      .add(() => this.loading = false);
  }

  update() {
    let biblioteca = Object.assign(new Biblioteca(), this.form.value);
    this._service.update(Number.parseInt(this.id), biblioteca).pipe(first()).subscribe(() => {
      //this.alertService.success('User updated', { keepAfterRouteChange: true });
      this.redirecToList();
    })
      .add(() => this.loading = false);
  }

  redirecToList() {
    this._router.navigate([`${this.isAddMode ? '../' : '../../'}`], { relativeTo: this._activatedRoute });
  }

}
