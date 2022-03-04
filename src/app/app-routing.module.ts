import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeActionComponent } from './liste-action/liste-action.component';
import { ListeBanqueComponent } from './liste-banque/liste-banque.component';
import { ListeQuarantaineComponent } from './liste-quarantaine/liste-quarantaine.component';
import { ListUserComponent } from './ListUser/list-user/list-user.component';

const routes: Routes = [
  
    { path: 'ListUser', component: ListUserComponent, },
    { path: 'ListAction', component: ListeActionComponent, },
    { path: 'ListBanque', component: ListeBanqueComponent, },
    { path: 'ListQurantaine', component: ListeQuarantaineComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
