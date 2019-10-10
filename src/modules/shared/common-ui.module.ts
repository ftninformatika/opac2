import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AutoCompleterModule,
  ButtonsModule, CardsModule, CarouselModule,
  CheckboxModule, DropdownModule,
  IconsModule,
  InputsModule, ModalModule,
  NavbarModule, PopoverModule, SelectModule, SidenavModule, TabsModule, TooltipModule, UploadFile, WavesModule
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
    SidenavModule,
    WavesModule,
    DropdownModule
  ],
  providers: [
    LazyLoadImageDirective
  ]
})
export class CommonUiModule { }
