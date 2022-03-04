import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './ListUser/list-user/list-user.component';
import {  HttpClientModule } from '@angular/common/http';
import { ListeBanqueComponent } from './liste-banque/liste-banque.component';
import { ListeActionComponent } from './liste-action/liste-action.component';
import { ListeQuarantaineComponent } from './liste-quarantaine/liste-quarantaine.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    ListeBanqueComponent,
    ListeActionComponent,
    ListeQuarantaineComponent
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
