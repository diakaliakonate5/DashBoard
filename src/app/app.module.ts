import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './ListUser/list-user/list-user.component';
import {  HttpClientModule } from '@angular/common/http';
import { ListBanqueComponent } from './ListBanque/list-banque/list-banque.component';
import { RendezVousComponent } from './RendezVous/rendez-vous/rendez-vous.component';
import { ListDemandeComponent } from './Demande/list-demande/list-demande.component';
import { ListAccepterComponent } from './Accept/list-accepter/list-accepter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    ListBanqueComponent,
    RendezVousComponent,
    ListDemandeComponent,
    ListAccepterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
