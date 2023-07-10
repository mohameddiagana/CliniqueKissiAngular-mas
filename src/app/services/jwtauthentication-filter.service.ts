import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JWTAuthenticationFilterService {

  constructor(private http:HttpClient) { }

  public RegisterRequest(request:any){
    return this.http.post("http://localhost:7075/authenticate",request,{responseType: 'text' as  'json'})
  }

  public AuthenticationFilter(token:any){
    let tokenStr='Bearer '+token
    const  header= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:7075/",{responseType: 'text' as  'json'});
  }
}
