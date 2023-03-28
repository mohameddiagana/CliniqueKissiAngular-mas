
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients! : Array<any>;



  constructor() {
    this.patients =[
      {codep:1, nomp:"diagana",prenom: "mohamed bocar",
      email:"mdiagana@isi.sn",tel: 454578788,sexe:"male",
      datanaissance:"26/10/2000",adresse: "sahm"},

     {codep:20, nomp:"salim",prenom:"ba",email:"dia@yahoo.com",
     tel:7854451254,sexe:"male",datenaissance:"14/20/2020",adresse:"jjj"},

     {codep:2, nomp:"fatima",prenom:"bakassime",email:"dia@yahoo.com",
     tel: 7854451254, sexe:"femele",datenaissance:"10/04/1990",adresse:"medina"},

    ];

   }
   public getAllpatient():Observable<any[]>{
    return of(this.patients);

  //   let rnd =Math.random();
  //   if(rnd<0.5) return throwError( ()=>new Error("erreure de connection"));
  //  else
   }


}
