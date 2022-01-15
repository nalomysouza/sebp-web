import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApoioRecebido } from '@app/shared/model/apoio-recebido.model';

@Component({
  selector: 'app-biblioteca-detail-apoio-recebido',
  templateUrl: './apoio-recebido.component.html',
  styleUrls: ['./apoio-recebido.component.scss']
})
export class ApoioRecebidoComponent implements OnInit {

  @Input() loading!: boolean;
  @Input() apoioRecebido!: ApoioRecebido;
  @Output() onSave = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  saveEmit(values: any) {
    this.onSave.emit(values);
  }


}
