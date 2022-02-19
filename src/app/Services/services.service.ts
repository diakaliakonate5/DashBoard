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
}
