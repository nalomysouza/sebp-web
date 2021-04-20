import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Municipio } from 'src/app/shared/model/municipio.model';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { OrgaoService } from 'src/app/shared/services/orgao.service';

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
    private _api: ApiService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.loadMunicipios();
    this.createForm();
    this.loadForm();
  }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      telefone: ['', [Validators.pattern('^[0-9]+$')]],
      fax: ['', [Validators.pattern('^[0-9]+$')]],
      endereco: this.fb.group({
        logradouro: ['', [Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9]+$')]],
        numero: [null, [Validators.pattern('^[0-9]+$')]],
        complemento: ['', [Validators.pattern('^[a-zA-Z0-9]+$')]],
        bairro: ['', [Validators.pattern('^[a-zA-Z0-9]+$')]],
        cep: [null, [Validators.pattern('^[0-9]+$')]],
        municipio: this.fb.group({
          id: [null, [Validators.required, Validators.pattern('^[0-9]+$')]]
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
      this._service.read(Number.parseInt(this.id))
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
    let orgao = Object.assign(new Orgao(), this.form.value);
    this._service.save(orgao)
      .pipe(first())
      .subscribe(() => {
        //this.alertService.success('User added', { keepAfterRouteChange: true });
        this.redirecToListOrgao();
      })
      .add(() => this.loading = false);
  }

  update() {
    let orgao = Object.assign(new Orgao(), this.form.value);
    this._service.update(Number.parseInt(this.id), orgao)
      .pipe(first())
      .subscribe(() => {
        //this.alertService.success('User updated', { keepAfterRouteChange: true });
        this.redirecToListOrgao();
      })
      .add(() => this.loading = false);
  }

  redirecToListOrgao() {
    this._router.navigate([`${this.isAddMode ? '../' : '../../'}`], { relativeTo: this._activatedRoute });
  }
}
