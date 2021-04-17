import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Orgao } from 'src/app/shared/model/orgao.model';

@Component({
  selector: 'app-orgao-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() visible = false;
  @Input() orgao: Orgao = {};

  validateForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(this.orgao);
  }

  createForm(orgao: Orgao) {
    this.validateForm = this.fb.group({
      nome: [orgao.nome, [Validators.required, Validators.minLength(2)]],
      email: [orgao.email, [Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      telefone: [orgao.telefone, [Validators.pattern('^[0-9]+$')]],
      fax: [orgao.fax, [Validators.pattern('^[0-9]+$')]],
      endereco: this.fb.group({
        logradouro: [orgao.endereco?.logradouro, [Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9]+$')]],
        numero: [orgao.endereco?.numero, [Validators.pattern('^[0-9]+$')]],
        complemento: [orgao.endereco?.complemento, [Validators.pattern('^[a-zA-Z0-9]+$')]],
        bairro: [orgao.endereco?.bairro, [Validators.pattern('^[a-zA-Z0-9]+$')]],
        cep: [orgao.endereco?.cep, [Validators.pattern('^[0-9]+$')]],
        municipio: this.fb.group({
          id: [orgao.endereco?.municipio?.id, [Validators.pattern('^[0-9]+$')]]
        })
      })
    });
  }

  onSubmit(): void {
    /**
     * Valida os campos do formulário
     */
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      //this.loading = true;
      console.log(this.validateForm.value);
    }
  }
}
