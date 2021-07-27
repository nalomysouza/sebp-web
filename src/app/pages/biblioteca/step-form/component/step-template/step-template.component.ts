import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss']
})
export class StepTemplateComponent implements OnInit {

  @Input() position!: number;
  @Input() formStatus!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
