import { Component, OnInit } from '@angular/core';
import {LatestService} from '../latest.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  latest:any=[]

  getLatestProductData()
  {
    this.latestservice.getlatestProduct().subscribe((res)=>{
      this.latest = res
    })
  }
  constructor(private latestservice:LatestService) { }

  ngOnInit(): void {
    this.getLatestProductData()
  }

}
