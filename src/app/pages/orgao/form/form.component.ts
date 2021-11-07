import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Municipio } from 'src/app/shared/model/municipio.model';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { HelpService } from 'src/app/shared/services/help.service';
import { OrgaoService } from 'src/app/shared/services/orgao.service';
import { ONLY_CHAR_AND_NUMBER, ONLY_MAIL, ONLY_NUMBER } from 'src/app/shared/utils/regex';
@Component({
  selector: 'app-orgao-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
  title = '';
  loading = false;
  id!: string;
  isAddMode!: boolean;
  municipios!: Municipio[];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _service: OrgaoService,
    private _api: HelpService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.loadMunicipios();
    this.createForm();
    this.loadForm();
  }

  ngAfterViewInit(): void {
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.pattern(ONLY_MAIL)]],
      telefone: [''],
      fax: [''],
      endereco: this.fb.group({
        logradouro: ['', [Validators.minLength(2), Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
        numero: [null, [Validators.pattern(ONLY_NUMBER)]],
        complemento: ['', [Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
        bairro: ['', [Validators.pattern(ONLY_CHAR_AND_NUMBER)]],
        cep: [''],
        municipio: this.fb.group({
          id: [null, Validators.required]
        })
      })
    });
  }

  loadMunicipios() {
    this._api.getMunicipios().pipe(first()).subscribe(x => this.municipios = x);
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
    let orgao = Object.assign(new Orgao(), this.form.value);
    this._service.save(orgao).pipe(first()).subscribe(() => {
      //this.alertService.success('User added', { keepAfterRouteChange: true });
      this.redirecToList();
    })
      .add(() => this.loading = false);
  }

  update() {
    let orgao = Object.assign(new Orgao(), this.form.value);
    this._service.update(Number.parseInt(this.id), orgao).pipe(first()).subscribe(() => {
      //this.alertService.success('User updated', { keepAfterRouteChange: true });
      this.redirecToList();
    })
      .add(() => this.loading = false);
  }

  redirecToList() {
    this._router.navigate([`${this.isAddMode ? '../' : '../../'}`], { relativeTo: this._activatedRoute });
  }
}
