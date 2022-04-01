import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-ajout-groupe',
  templateUrl: './ajout-groupe.component.html',
  styleUrls: ['./ajout-groupe.component.css']
})
export class AjoutGroupeComponent implements OnInit {

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
      type: ['', Validators.required],
      donne: ['', Validators.required],
      recois: ['', Validators.required],

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

   this.service.ajoutGroupe(fg.value).subscribe(

     (data:any)=>{
      this.toastr.success("AJout effectuer avec succes !!!")
       this.router.navigateByUrl("/ListGroupe");

     }
   )

  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
