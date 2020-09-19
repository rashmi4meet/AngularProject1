import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api="http://localhost:4444/product/"
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  saveProductData(data){
    return this.httpClient.post(api,data)
  }

  getProduct()
  {
    return this.httpClient.get(api)
  }

  getProductById(id)
  {
      return this.httpClient.get(api+id)
  }

  updateProduct(id, data)
  {
    return this.httpClient.put(api+id,data)
  }

  
  deleteProduct(id){
    return this.httpClient.delete(api+id)
  }


  constructor(private httpClient:HttpClient) { }
}
