import { Component, OnInit } from '@angular/core';
import {Signup} from './signup';
import {FormGroup , FormControl} from '@angular/forms';
import {DataService} from '../data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup
  signup:Signup[]=[]

  register()
  {
    this.dataservice.saveUserData(this.form.value).subscribe((res)=>{
      alert("users data save successfully")
    })
  }

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.form = new FormGroup({

      firstname:new FormControl(""),
      lastname:new FormControl(""),
      birthday:new FormControl(""),
      gender:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      mobile:new FormControl(""),
      country:new FormControl(""),
    })
  }

}
