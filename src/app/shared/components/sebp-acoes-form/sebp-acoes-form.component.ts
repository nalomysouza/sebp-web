import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sebp-acoes-form',
  templateUrl: './sebp-acoes-form.component.html',
  styleUrls: ['./sebp-acoes-form.component.scss']
})
export class SebpAcoesFormComponent implements OnInit {
  @Input() atualizando = false;
  @Input() carregando = false;

  @Output() salvar = new EventEmitter<void>();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onRedirect() {
    this._router.navigate([`${this.atualizando ? '../../' : '../'}`], { relativeTo: this._activatedRoute });
  }

  onSave() {
    this.salvar.emit();
  }
}
