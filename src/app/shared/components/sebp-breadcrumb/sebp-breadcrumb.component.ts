import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sebp-breadcrumb',
  templateUrl: './sebp-breadcrumb.component.html',
  styleUrls: ['./sebp-breadcrumb.component.scss']
})
export class SebpBreadcrumbComponent implements OnInit {
  @Input() subtitulo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
