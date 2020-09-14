import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Product} from './product';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  form:FormGroup
  

  register()
  {
      this.productservice.saveProductData(this.form.value).subscribe((res)=>{
        alert("product data save sucessfully")
      })
  }

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.form = new FormGroup(
    {
      product_name:new FormControl(""),
      product_id:new FormControl(""),
      rear_camera:new FormControl(""),
      front_camera:new FormControl(""),
      processor:new FormControl(""),
      operating_system:new FormControl(""),
      storage:new FormControl(""),
      display:new FormControl(""),
      battery:new FormControl(""),
      dimensions:new FormControl(""),
      product_image:new FormControl(""),
     
    })
  }

}
