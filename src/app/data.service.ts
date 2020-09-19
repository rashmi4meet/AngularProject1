import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = "http://localhost:5555/users/"


@Injectable({
  providedIn: 'root'
})
export class DataService {


  saveUserData(data) {
    return this.httpClient.post(api,data)
  }

  saveLoginData(data) {
    return this.httpClient.post(api, data)
  }

  deleteUser(id) {
    return this.httpClient.delete(api + id)
  }

  getData() {
    return this.httpClient.get(api)
  }


  constructor(private httpClient: HttpClient) { }
}
