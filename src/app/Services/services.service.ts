import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url='http://localhost:8080';
  constructor(private http: HttpClient) { }
  getAllUsers(){
    return this.http.get(this.url+"/Utilisateur/listUtilisateur");
  }
  //Banque///////////////////
  getBanque(){
    return this.http.get(this.url+"/Banque/listBanque");
  }
  //Rdv///////////////
  getAllRdv(){
    return this.http.get(this.url+"/RendezVous/listRendez");
  }
  //demande///////////////////////////
  getAllDemande(){
    return this.http.get(this.url+"/Demande/listDemande");
  }
  //Accept/////////////////////
  getAllAccept(){
    return this.http.get(this.url+"/Accepter/listAccept");
  }
}
