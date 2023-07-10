import { Component, OnInit } from '@angular/core';
import {JWTAuthenticationFilterService} from "../services/jwtauthentication-filter.service";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
      authRequest:any={
      "email": "assisi@gmail.sn",
      "password": "passer123"

    };
  constructor(private service: JWTAuthenticationFilterService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest)
  }
  public getAccessToken(authRequest:any){
    let resp=this.service.AuthenticationFilter(authRequest);
    resp.subscribe(data=>console.log("token: "+data))

  }

}
