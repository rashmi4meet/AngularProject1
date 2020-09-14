import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  product:any=[]
 
  getProductData(){
    this.productservice.getProduct().subscribe((res)=>{
      this.product=res 
      console.log(this.product)
    })
  }


  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
     this.getProductData()

  }

}
