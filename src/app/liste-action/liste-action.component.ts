import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-liste-action',
  templateUrl: './liste-action.component.html',
  styleUrls: ['./liste-action.component.css']
})
export class ListeActionComponent implements OnInit {
   listeAction: any;
  constructor( public service:ServicesService) { }

  ngOnInit(): void {
    this.listaction()
  }
listaction(){
  return this.service.listaction().subscribe(Data =>{
    this.listeAction=Data
    console.log(this.listeAction);
    
  })
}
}