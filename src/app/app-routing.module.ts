import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthMasterComponent} from './account/auth-master/auth-master.component';

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
