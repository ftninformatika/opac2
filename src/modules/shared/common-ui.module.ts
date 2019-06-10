import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AutoCompleterModule,
  ButtonsModule, CardsFreeModule, CarouselModule,
  CheckboxModule,
  IconsModule,
  InputsModule,
  NavbarModule, SelectModule, TabsModule
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
    CarouselModule,
    TabsModule,
    CommonModule,
    SelectModule
  ]
})
export class CommonUiModule { }
