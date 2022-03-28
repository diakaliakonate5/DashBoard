import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banque Blood';
  loginData:any;
  loginStatus:boolean = false;
 
    ngOnInit(): void {
      
      if(localStorage["isLogin"]){
      this.loginData=JSON.parse(localStorage["isLogin"]);
    }
    
    if(localStorage["loginStatus"]){
      this.loginStatus=JSON.parse(localStorage["loginStatus"]);
    }
  
    }
    logOut(){
        localStorage.removeItem('isLogin');
        localStorage.removeItem('loginStatus')
        location.replace("/");
  
  
    }
}
