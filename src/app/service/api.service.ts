import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAllProduct(){
    return this.http.get<any>("http://localhost:8080/api/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
