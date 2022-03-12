import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
listRdv: any;
  constructor( private service: ServicesService) { }

  ngOnInit(): void {
    this.listerRdv()
  }
  listerRdv(){
    this.service.getAllRdv().subscribe((data)=>{
      console.log(data);
      return this.listRdv=data;

    })
  }
}
