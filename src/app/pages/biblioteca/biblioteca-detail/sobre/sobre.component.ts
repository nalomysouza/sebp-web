import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';

@Component({
  selector: 'app-biblioteca-detail-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  @Input() loading!: boolean;
  @Input() biblioteca!: Biblioteca;
  @Output() onSave = new EventEmitter();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _bibliotecaService: BibliotecaService,
  ) { }

  ngOnInit(): void {
  }

  saveEmit(values: any) {
    this.onSave.emit(values);
  }

}
