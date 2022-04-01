import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.css']
})
export class ListGroupeComponent implements OnInit {
listGroupe: any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.listerGroupe();
  }

listerGroupe(){
  this.service.getAllGroupe().subscribe((dat:any)=>{
    this.listGroupe = dat;
  })
}

}
