import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api ='http://localhost:3000'
  constructor(private http:HttpClient) { }

  loginUser(email:string,password:string):Observable<any>{
    return this.http.post(`${this.api}/login-submit`,{email,password})
  }
}
