import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-liste-banque',
  templateUrl: './liste-banque.component.html',
  styleUrls: ['./liste-banque.component.css']
})
export class ListeBanqueComponent implements OnInit {
  listeBanque: any;

  constructor( public service:ServicesService) { }

  ngOnInit(): void {
    this.listbanque()
  }
  listbanque(){
   return this.service.listbanque().subscribe((Data) =>{
    
     this.listeBanque= Data
     console.log(this.listbanque);
     
   })
  }

}
