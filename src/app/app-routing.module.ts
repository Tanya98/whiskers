import {AuthMasterComponent} from './account/auth-master/auth-master.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AuthMasterComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`./account/account.module`).then(m => m.AccountModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
