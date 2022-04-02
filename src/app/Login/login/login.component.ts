import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServicesService } from 'src/app/Services/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginInfo:any;
  constructor(private service : ServicesService, private toast :ToastrService,
    public router: Router) { }

  ngOnInit(): void {

  }

  onLogin(form :NgForm){
    this.service.login(form.value["login"],form.value["password"]).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        let loginStatus = true
        location.replace("/ListUser");
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      }
  },
  err=>{
    console.log("login incorrecte");

    this.toast.error("Login ou mot de passe incorrect");
  })
}}
