import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './shared/http/interceptors/token-interceptor';
import {AccountModule} from './account/account.module';
import {AuthMasterComponent} from './account/auth-master/auth-master.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthMasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
