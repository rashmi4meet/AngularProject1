import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {


  form: FormGroup;
  product:any = [];
  id : number;


  update()
  {
     this.productservice.updateProduct(this.id,this.form.value).subscribe((res)=>{
        alert("Product Updated successfully")
        this.router.navigateByUrl("/")
     })
  }


  constructor(private productservice:ProductService,private activatedroute : ActivatedRoute , private router:Router) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe((param)=>
    
    {
        this.id = param["id"]
        this.productservice.getProductById(this.id).subscribe((data)=>
        {
          this.product = data
          this.form = new FormGroup(
            {
              product_name:new FormControl(this.product .product_name),
              product_id:new FormControl(this.product .product_id),
              rear_camera:new FormControl(this.product .rear_camera),
              front_camera:new FormControl(this.product .front_camera),
              processor:new FormControl(this.product .processor),
              operating_system:new FormControl(this.product .operating_system),
              storage:new FormControl(this.product .storage),
              display:new FormControl(this.product .display),
              battery:new FormControl(this.product .battery),
              network_connect:new FormControl(this.product .network_connect),
              dimensions:new FormControl(this.product .dimensions),
              product_image:new FormControl(this.product .product_image),
            }
          )
        })

    })
  }

}
