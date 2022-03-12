import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
listDemande: any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.listerDemande()
  }
  listerDemande(){
    this.service.getAllDemande().subscribe((data)=>{
      console.log(data);
      return this.listDemande=data;

    })
  }
}
