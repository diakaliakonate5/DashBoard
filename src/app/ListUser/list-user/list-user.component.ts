import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
listUsers: any
  constructor(public service:ServicesService) { }

  ngOnInit(): void {
  
    this.getallusers();
  }

  getallusers(){
    return this.service.getallusers().subscribe(donne =>{
      this.listUsers=donne;
      console.log(donne);
      

    })
  }

}
