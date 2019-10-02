import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AutoCompleterModule,
  ButtonsModule, CardsModule, CarouselModule,
  CheckboxModule,
  IconsModule,
  InputsModule, ModalModule,
  NavbarModule, PopoverModule, SelectModule, SidenavModule, TabsModule, TooltipModule
} from 'ng-uikit-pro-standard';
import { CommonModule } from '@angular/common';
import { LazyLoadImageDirective } from 'ng-lazyload-image';

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
    CardsModule,
    IconsModule,
    CarouselModule,
    TabsModule,
    CommonModule,
    SelectModule,
    ModalModule,
    PopoverModule,
    TooltipModule,
    SidenavModule
  ],
  providers: [
    LazyLoadImageDirective
  ]
})
export class CommonUiModule { }
