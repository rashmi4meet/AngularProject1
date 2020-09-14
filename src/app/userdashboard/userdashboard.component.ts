import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Signup } from '../signup/signup';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  signup:any=[]
  
  constructor(private dataservice:DataService) { }

  getUserData(){
    this.dataservice.getData().subscribe((res)=>{
      this.signup = res
    })
  }

  ngOnInit(): void {

    this.getUserData()
    
  }
    
  }
