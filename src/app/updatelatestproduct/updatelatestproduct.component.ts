import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { Latest } from '../latest-product/latest';
import { LatestService } from '../latest.service';


@Component({
  selector: 'app-updatelatestproduct',
  templateUrl: './updatelatestproduct.component.html',
  styleUrls: ['./updatelatestproduct.component.css']
})
export class UpdatelatestproductComponent implements OnInit {

  form : FormGroup;
  latest:any = [];
  id:number;


  update()
  {
      this.latestservice.updatelatestProduct(this.id,this.form.value).subscribe((res)=>{
        alert("Product updated successfully")
        this.router.navigateByUrl("/")
      })

  }

  constructor(private latestservice:LatestService, private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe((param)=>{
      this.id = param["id"]
      this.latestservice.getlatestProductById(this.id).subscribe((data)=>{
      this.latest = data
      this.form = new FormGroup(

      {
          product_name:new FormControl(this.latest .product_name),
          product_image:new FormControl(this.latest .product_image),
          camera:new FormControl(this.latest .camera),
          camera_image:new FormControl(this.latest .camera_image),
          processor:new FormControl(this.latest .processor),
          processor_image:new FormControl(this.latest .processor_image),
          display:new FormControl(this.latest .display),
          display_image:new FormControl(this.latest .display_image),
          storage:new FormControl(this.latest .storage),
          storage_image:new FormControl(this.latest .storage_image),
          battery:new FormControl(this.latest .battery),
          battery_image:new FormControl(this.latest .battery_image),
          charging:new FormControl(this.latest .charging),
          charging_image:new FormControl(this.latest .charging_image),

        })
      })
    })
  }

}
