import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-update-banque',
  templateUrl: './update-banque.component.html',
  styleUrls: ['./update-banque.component.css']
})
export class UpdateBanqueComponent implements OnInit {
id: any
  constructor(private service: ServicesService, private route: ActivatedRoute, private router :Router) { }

  UpdateBanque = new FormGroup({
    nom : new FormControl('', Validators.required),
    telephone : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    adresse : new FormControl('', Validators.required),

  }

  );
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.service.detailBanque(this.route.snapshot.params['id']).subscribe((result: any)=>{
      this.UpdateBanque = new FormGroup({
        nom : new FormControl(result['nom']),
        telephone : new FormControl(result['telephone']),
        adresse : new FormControl(result['adresse']),
        email : new FormControl(result['email']),

      });
      console.log('result', result);
    })
  }
  UpdateData(){
       this.service.updateBanque(this.route.snapshot.params['id'],this.UpdateBanque.value).subscribe((result: any)=>{


      return this.router.navigateByUrl("/ListBanque");
    })

  }

}
