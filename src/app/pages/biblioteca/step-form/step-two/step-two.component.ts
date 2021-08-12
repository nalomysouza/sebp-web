import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApoioRecebido } from 'src/app/shared/model/apoio-recebido.model';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { ApoioRecebidoService } from 'src/app/shared/services/apoio-recebido.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  bibliotecaId!: string;
  isAddMode!: boolean;
  loading = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _service: ApoioRecebidoService,
  ) { }

  ngOnInit(): void {
    this.bibliotecaId = this._activatedRoute.snapshot.params['id'];
    this.createForm();
    this.loadForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      proares: [false, Validators.required],
      proaresDescricao: '',
      ubecm: [false, Validators.required],
      ubecmDescricao: '',
      minc: [false, Validators.required],
      mincDescricao: '',
      biblioteca: this.fb.group({
        id: [this.biblioteca.id]
      })
    });
  }

  loadForm() {
    if (this.bibliotecaId) {
      this._service
        .findByBibliotecaId(this.biblioteca.id)
        .pipe(first())
        .subscribe(x => {
          this.isAddMode = !x.id;
          this.form.patchValue(x)
        });
    }
  }

  onSubmit(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if (this.form.valid) {
      this.loading = true;
      let apoioRecebido = Object.assign(new ApoioRecebido(), this.form.value);
      this.isAddMode ? this.create(apoioRecebido) : this.update(apoioRecebido);
    }
  }

  create(apoioRecebido: ApoioRecebido) {
    this._service.save(apoioRecebido)
      .pipe(first())
      .subscribe((created) => {
        //this.alertService.success('User added', { keepAfterRouteChange: true });
        this.nextUrl();
      }).add(() => this.loading = false);
  }

  update(apoioRecebido: ApoioRecebido) {
    this._service.update(apoioRecebido.id, apoioRecebido)
      .pipe(first())
      .subscribe((updated) => {
        //this.alertService.success('User updated', { keepAfterRouteChange: true });
        this.nextUrl();
      }).add(() => this.loading = false);
  }

  get biblioteca() {
    return { id: Number.parseInt(this.bibliotecaId) };
  }

  oldUrl() {
    this._router.navigate([`/biblioteca/form/${this.biblioteca.id}/step-one`], { relativeTo: this._activatedRoute });
  }

  nextUrl() {
    this._router.navigate([`/biblioteca/form/${this.bibliotecaId}/step-three`], { relativeTo: this._activatedRoute });
  }
}
