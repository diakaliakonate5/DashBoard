import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-list-banque',
  templateUrl: './list-banque.component.html',
  styleUrls: ['./list-banque.component.css']
})
export class ListBanqueComponent implements OnInit {
  listBanque: any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
this.listerBaqnue()
  }
  listerBaqnue(){
    this.service.getBanque().subscribe((data)=>{
      console.log(data);
      return this.listBanque=data;

    })
  }
  deleteBanque(id : any){
    this.service.deleteBanque(id).subscribe((result)=>{
    // console.log(result))
    this.ngOnInit()
    });
  }
}
