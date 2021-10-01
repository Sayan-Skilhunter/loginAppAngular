import { User } from './User';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  SERVER_URL = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public registration(user:User){
    console.log(user);
    return this.http.post(this.SERVER_URL+"/register", user);
  }

  public login(user:User){
    console.log(user);
    return this.http.post(this.SERVER_URL+"/login", user, {responseType:'text'});
  }

  public validate(otp:string){
   let params = new HttpParams().set('Otp', otp);
   return this.http.get(this.SERVER_URL+"/validate", { params: params });

  }

  public logout(){
    return this.http.get(this.SERVER_URL+"/logout");
  }
  
}
