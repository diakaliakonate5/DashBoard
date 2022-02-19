import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
listUsers: any
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.listerUsers();
  
    
  }

  listerUsers(){
    this.service.getAllUsers().subscribe((data)=>{
      console.log(data);
      return this.listUsers=data;

    })
  }

}
