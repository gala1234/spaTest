import { Component } from '@angular/core';
import { getCountriesList } from '../../api/methods';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements getCountriesList {
  constructor() { }
  formDescription = 'aqui añades usuarios';
  
  getCountriesList() {};

}
