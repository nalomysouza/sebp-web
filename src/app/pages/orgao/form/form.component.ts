import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Orgao } from 'src/app/shared/model/orgao.model';

@Component({
  selector: 'app-orgao-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() visible = false;
  @Input() orgao: Orgao = {};

  constructor() { }

  ngOnInit(): void {
  }
}
