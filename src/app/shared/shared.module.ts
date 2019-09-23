import {NgModule} from '@angular/core';
import {LocalizationService} from './services/localization.service';
import {SHARED_BUTTONS} from './components/buttons';
import {SHARED_INPUTS} from './components/inputs';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    SHARED_INPUTS,
    SHARED_BUTTONS
  ],
  declarations: [
    SHARED_INPUTS,
    SHARED_BUTTONS
  ],
  providers: [LocalizationService],
})
export class SharedModule {
}
