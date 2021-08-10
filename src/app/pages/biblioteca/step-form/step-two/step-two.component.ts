import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
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
      proares: [false, Validators.required],
      proaresDescricao: [''],
      ubecm: [false, Validators.required],
      ubecmDescricao: [''],
      minc: [false, Validators.required],
      mincDescricao: [''],
      biblioteca: this.fb.group({
        id: [this.bibliotecaId, Validators.required]
      })
    });
  }

  loadForm() {
    if (!this.isAddMode) {
      this._service
        .findByBibliotecaId(Number.parseInt(this.bibliotecaId))
        .pipe(first())
        .subscribe(x => {
          this.isAddMode = !x.id;
          this.form.patchValue(x);
        });
    }
  }

  onSubmit(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    console.log('form =>', this.form.value);
    console.log('isAddMode =>', this.isAddMode);
    if (this.form.valid) {
      // this.loading = true;
      // this.isAddMode ? this.create() : this.update();
    }
  }

  create() {
    let biblioteca = Object.assign(new Biblioteca(), this.form.value);
    this._service.save(biblioteca).pipe(first()).subscribe((created) => {
      //this.alertService.success('User added', { keepAfterRouteChange: true });
      this.nextUrl();
    })
      .add(() => this.loading = false);
  }

  update() {
    let biblioteca = Object.assign(new Biblioteca(), this.form.value);
    this._service.update(Number.parseInt(this.bibliotecaId), biblioteca).pipe(first()).subscribe((updated) => {
      //this.alertService.success('User updated', { keepAfterRouteChange: true });
      this.nextUrl();
    })
      .add(() => this.loading = false);
  }

  oldUrl() {
    this._router.navigate([`/biblioteca/form/${this.bibliotecaId}/step-one`], { relativeTo: this._activatedRoute });
  }

  nextUrl() {
    this._router.navigate([`/biblioteca/form/${this.bibliotecaId}/step-three`], { relativeTo: this._activatedRoute });
  }
}
