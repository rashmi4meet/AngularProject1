import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  product:any=[]
 
  deleteProduct(id){
    this.productservice.deleteProduct(id).subscribe((res)=>{
      alert("Data Delete Sucessfully")
      this.getProductData()
    })
  }

  constructor(private productservice:ProductService) { }
  getProductData(){
    this.productservice.getProduct().subscribe((res)=>{
    this.product = res
  })
}
  ngOnInit(): void {
    this.getProductData()
  }

}
