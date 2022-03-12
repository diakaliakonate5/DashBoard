
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url:string="http://localhost:8080/Utilisateur/"

  constructor(public http:HttpClient) {

   }

   getallusers(){
     return this.http.get(this.url+'listUtilisateur')
   }
  listbanque(){
    return this.http.get('http://localhost:8080/Banque/listBanque')
  }
  listaction(){
    return this.http.get('http://localhost:8080/Action/listAction')
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
