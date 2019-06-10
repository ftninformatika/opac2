import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AutoCompleterModule,
  ButtonsModule, CardsFreeModule, CardsModule,
  CheckboxModule,
  IconsModule,
  InputsModule,
  NavbarModule
} from 'ng-uikit-pro-standard';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AutoCompleterModule,
    InputsModule,
    ButtonsModule,
    CheckboxModule,
    AccordionModule,
    NavbarModule,
    CardsFreeModule,
    IconsModule,
    CommonModule
  ]
})
export class CommonUiModule { }
