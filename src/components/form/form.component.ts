import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {
  constructor() { }
  formDescription = 'aqui añades usuarios';
  
  ngOnInit() {
  }

}
