import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.styl']
})
export class InputComponent implements OnInit {

  constructor() { }
   
  id = 'name';
  name = 'name';
  type = 'name';
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
