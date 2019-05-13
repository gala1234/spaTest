import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.styl']
})
export class InputComponent implements OnInit {

  @Input() inputType;

  constructor() { }

  id = "b";
  name = "b";
  required = true;
  minlength = 5;
  maxlength = 20;
  placeHolder = 'name';
  
  validate(e) {
    console.log(e);
  }

  ngOnInit() {
  }
}
