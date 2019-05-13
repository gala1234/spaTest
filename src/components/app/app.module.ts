import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FormComponent } from '../form/form.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { InputComponent } from '../input/input.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ButtonComponent } from '../button/button.component';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { ListModifierComponent } from '../list-modifier/list-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FormComponent,
    InputFieldComponent,
    InputComponent,
    DropdownComponent,
    FooterComponent,
    MainComponent,
    BottomBarComponent,
    TopBarComponent,
    ButtonComponent,
    CustomersListComponent,
    ListModifierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };