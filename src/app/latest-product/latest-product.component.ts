import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { LatestService} from '../latest.service'
import {Latest} from './latest';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {

  form:FormGroup
  latest:Latest[]=[]

  register()
  {
    this.latestservice.saveLatestProductData(this.form.value).subscribe((res)=>{
      alert("Latest Product Data Save Successfully")

    })
    
  }

  constructor(private latestservice:LatestService) { }

  ngOnInit(): void {

    this.form=new FormGroup(
  {
     
    product_name:new FormControl(""),
    product_image:new FormControl(""),
    camera:new FormControl(""),
    camera_image:new FormControl(""),
    processor:new FormControl(""),
    processor_image:new FormControl(""),
    display:new FormControl(""),
    display_image:new FormControl(""),
    storage:new FormControl(""),
    storage_image:new FormControl(""),
    battery:new FormControl(""),
    battery_image:new FormControl(""),
    
  })
  }

}
