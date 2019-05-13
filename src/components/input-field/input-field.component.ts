import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.styl']
})
export class InputFieldComponent {

  @Input() inputType;

  constructor() { }

}
