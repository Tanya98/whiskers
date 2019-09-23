import {NgModule} from '@angular/core';
import {AccountRouting} from './account-routing';
import {SignInComponent} from './sign-in/sign-in.component';
import {OverviewComponent} from './overview/overview.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    AccountRouting,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    OverviewComponent,
    SignInComponent
  ],
  providers: [],
})
export class AccountModule {
}
