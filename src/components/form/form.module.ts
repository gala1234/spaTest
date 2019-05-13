import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form.component';

import { InputFieldComponent } from '../input-field/input-field.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class FormModule { };