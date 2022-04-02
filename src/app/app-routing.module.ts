import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccepterComponent } from './Accept/list-accepter/list-accepter.component';
import { AjoutComponent } from './Banque/ajout/ajout.component';
import { UpdateBanqueComponent } from './Banque/update-banque/update-banque.component';
import { ListDemandeComponent } from './Demande/list-demande/list-demande.component';
import { AjoutGroupeComponent } from './GroupeSanguin/ajout-groupe/ajout-groupe.component';
import { ListGroupeComponent } from './GroupeSanguin/list-groupe/list-groupe.component';
import { ListBanqueComponent } from './ListBanque/list-banque/list-banque.component';
import { ListUserComponent } from './ListUser/list-user/list-user.component';
import { LoginComponent } from './Login/login/login.component';
import { ProfilComponent } from './Profil/profil/profil.component';
import { RendezVousComponent } from './RendezVous/rendez-vous/rendez-vous.component';

const routes: Routes = [

    { path: 'ListUser', component: ListUserComponent, },
    { path: 'ListBanque', component: ListBanqueComponent, },
    { path: 'ListRdv', component: RendezVousComponent, },
    { path: 'ListDemande', component: ListDemandeComponent },
    { path: 'ListAccept', component: ListAccepterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'AjoutBanque', component: AjoutComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'AjoutGroupe', component: AjoutGroupeComponent },
    { path: 'ListGroupe', component: ListGroupeComponent },
    { path: 'UpdateBanque/:id', component: UpdateBanqueComponent },


    { path: '', redirectTo: '/login', pathMatch:'full'},


]
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
