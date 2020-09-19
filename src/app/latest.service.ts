import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api="http://localhost:3333/latest/"

@Injectable({
  providedIn: 'root'
})
export class LatestService {

  saveLatestProductData(data){
    return this.httpClient.post(api,data)
  }


  getlatestProduct()
  {
    return this.httpClient.get(api)
  }


  getlatestProductById(id){
    return this.httpClient.get(api+id)
  }
  

  updatelatestProduct(id,data)
  {
    return this.httpClient.put(api+id,data)
  }


  deletelatestProduct(id){
    return this.httpClient.delete(api+id)
  }
  constructor(private httpClient:HttpClient) { }
}
