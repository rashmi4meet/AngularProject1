import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService}  from './data.service';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import {ProductService} from './product.service';
import { LatestproductdashboardComponent } from './latestproductdashboard/latestproductdashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PhonesComponent } from './phones/phones.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LatestProductComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    ProductDashboardComponent,
    LatestproductdashboardComponent,
    HomeComponent,
    AdminComponent,
    PhonesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
