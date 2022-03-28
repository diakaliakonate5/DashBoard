import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  adminData: any;
  user: any;
  id: any;
 
  loginData: any;
  formgroup: any;
 
  submitted= false;


  constructor( 
    public service: ServicesService,
    public  route: ActivatedRoute,
    public router : Router,
    public formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.formgroup = this.formBuilder.group({
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
     
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
     

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }



  get f() { return this.formgroup.controls; }




  ajouterB(fg : FormGroup){
    this.submitted = true;
  
    


    // stop here if form is invalid
    if (this.formgroup.invalid) {
        return;
    }
     
   console.log(JSON.stringify(fg.value));

   this.service.AjoutBanque(fg.value).subscribe(
     
     (data:any)=>{
      this.toastr.success("AJout effectuer avec succes !!!")
       this.router.navigateByUrl("/ListBanque");
     
       console.log("hello world" +data);         
     }
   )
    
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}