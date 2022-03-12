import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-list-accepter',
  templateUrl: './list-accepter.component.html',
  styleUrls: ['./list-accepter.component.css']
})
export class ListAccepterComponent implements OnInit {
  listAccept: any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.listerAccept();
  }
  listerAccept(){
    this.service.getAllAccept().subscribe((data)=>{
      console.log(data);
      return this.listAccept=data;

    })
  }
}
