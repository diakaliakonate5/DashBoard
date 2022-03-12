import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccepterComponent } from './Accept/list-accepter/list-accepter.component';
import { ListDemandeComponent } from './Demande/list-demande/list-demande.component';
import { ListBanqueComponent } from './ListBanque/list-banque/list-banque.component';
import { ListUserComponent } from './ListUser/list-user/list-user.component';
import { RendezVousComponent } from './RendezVous/rendez-vous/rendez-vous.component';

const routes: Routes = [
  
    { path: 'ListUser', component: ListUserComponent, },
    { path: 'ListBanque', component: ListBanqueComponent, },
    { path: 'ListRdv', component: RendezVousComponent, },
    { path: 'ListDemande', component: ListDemandeComponent },
    { path: 'ListAccept', component: ListAccepterComponent },
  
]
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }