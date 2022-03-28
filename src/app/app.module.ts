import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './ListUser/list-user/list-user.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBanqueComponent } from './ListBanque/list-banque/list-banque.component';
import { ListDemandeComponent } from './Demande/list-demande/list-demande.component';
import { ListAccepterComponent } from './Accept/list-accepter/list-accepter.component';
import { RendezVousComponent } from './RendezVous/rendez-vous/rendez-vous.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login/login/login.component';
import { AjoutComponent } from './Banque/ajout/ajout.component';
import { ProfilComponent } from './Profil/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
   ListBanqueComponent,
  ListDemandeComponent,
   ListAccepterComponent,
    RendezVousComponent,
    
    LoginComponent,
          AjoutComponent,
          ProfilComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      preventDuplicates: true,
    })
   
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
