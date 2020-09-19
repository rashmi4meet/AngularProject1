import { Component, OnInit } from '@angular/core';
import {LatestService} from '../latest.service';
@Component({
  selector: 'app-latestproductdashboard',
  templateUrl: './latestproductdashboard.component.html',
  styleUrls: ['./latestproductdashboard.component.css']
})
export class LatestproductdashboardComponent implements OnInit {

  latest:any=[]
  

  deleteProduct(id){
    this.latestservice.deletelatestProduct(id).subscribe((res)=>{
      alert("Data Delete Sucessfully")
      this.getLatestProductData()
    })
  }

  constructor(private latestservice:LatestService) { }

  getLatestProductData()
  {
    this.latestservice.getlatestProduct().subscribe((res)=>{
      this.latest = res
    })
  }
  ngOnInit(): void {
    this.getLatestProductData()
  }

}
