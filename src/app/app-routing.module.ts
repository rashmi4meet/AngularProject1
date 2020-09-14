import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { LatestproductdashboardComponent } from './latestproductdashboard/latestproductdashboard.component';
import { LoginComponent } from './login/login.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"adm",component:AdminComponent},
  {path:"home",component:HomeComponent},
  {path:"pro",component:ProductComponent},
  {path:"prodash",component:ProductDashboardComponent},
  {path:"userdash",component:UserdashboardComponent},
  {path:"adm",component:AdminComponent},
  {path:"userlog",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"register",component:SignupComponent},
  {path:"alp",component:LatestProductComponent},
  {path:"latprodash",component:LatestproductdashboardComponent},
  {path:"phones",component:PhonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
