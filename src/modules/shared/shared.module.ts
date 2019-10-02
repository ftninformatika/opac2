import { AddToCollectionButton } from './components/add-to-collection-button/add-to-collection-button';
import { NgModule } from '@angular/core';
import {CommonUiModule} from './common-ui.module';

/**
 *  Here will be components that needs to be shared across multiple feature modules
 *  for example login/register modal, footer etc....
 */

@NgModule({
  imports: [
    CommonUiModule
  ],
  declarations: [
    AddToCollectionButton
  ],
  exports: [
    AddToCollectionButton
  ]
})
export class SharedModule {}

