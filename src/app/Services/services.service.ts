
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url='http://localhost:8080';

  constructor(public http:HttpClient) {

   }
   login(login : string, password : String){
    // console.log(telephone);
    return this.http.get(this.url+"/Admin/login/"+login+"/"+password);
  }

   getallusers(){
     return this.http.get(this.url+"/Utilisateur/listUtilisateur")
   }
  listbanque(){
    return this.http.get(this.url+"/Banque/listBanque")
  }
  listaction(){
    return this.http.get(this.url+'/Action/listAction')
  }
  //Banque///////////////////
  getBanque(){
    return this.http.get(this.url+"/Banque/listBanque");
  }
  AjoutBanque(data: any){
    console.log(data);
    return this.http.post(this.url+"/Banque/Ajout", data);
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

  //Groupe Sanguin
ajoutGroupe(dat:any){
  return this.http.post(this.url+"/Groupe/Ajout", dat)
}

  getAllGroupe(){
    return this.http.get(this.url+"/Groupe/listGroupe")
  }

  detailBanque(id: any){
    return this.http.get(`${this.url+"/Banque/ById"}/${id}`);
  }
  updateBanque(id: any,  data: any){
    return this.http.put(`${this.url+"/Banque/modifierBanque"}/${id}`,data);
  }

  deleteBanque(id: any){
    return this.http.delete(this.url+"/Banque/suprimerBanque/"+id)
  }

}
