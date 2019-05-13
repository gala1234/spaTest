import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { InputFieldComponent } from './input-field.component';

import { InputComponent } from '../input/input.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [InputFieldComponent]
})
export class FormModule { };