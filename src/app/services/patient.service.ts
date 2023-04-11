
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import {Patient} from "../Model/patient";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  readonly API_URL = "http://localhost:8080/api/v1/auth/patient/liste"
  //readonly ENDPOINT_PATIENTS = "/patient/liste"
   patients!: Array<any>;


  constructor(private http: HttpClient) {
    this.patients! = [

      {
        idpatient: 41,
        codep: 5,
        nomp: "dija",
        prenom: "ball",
        email: "ball@yahoo.com",
        tel: 78445855,
        sexe: "male",
        datenaissance: "12/25/2020",
        adresse: "dara",
        profession: "vipp",
        CIN: 14558557,
        age: 85
      },

      {
        idpatient: 50,
        codep: 20,
        nomp: "salim",
        prenom: "ba",
        email: "dia@yahoo.com",
        tel: 7854451254,
        sexe: "male",
        datenaissance: "14/20/2020",
        adresse: "dara",
        profession: "vipp",
        CIN: 14558557,
        age: 15
      },

      {
        idpatient: 6,
        codep: 2,
        nomp: "fatima",
        prenom: "bakassime",
        email: "dia@yahoo.com",
        tel: 7854451254,
        sexe: "femele",
        datenaissance: "10/04/1990",
        adresse: "medina",
        profession: "ingenieur",
        CIN: 12522587,
        age: 51
      },

    ];

  }


  public getAllpatient():Observable<Patient[]>{
    return this.http.get<Patient[]>('${this.API_URL}');
    //return of(this.patients);

  }


  // @ts-ignore
  Enregistrer(patients: Patient): Observable<Patient> {
    let host = environment.host;
    return this.http.post<Patient>(host+"/patients",patients)

  }
  NouveauPatient(patient: Patient): Observable<Object>{
    return this.http.post('${this.API_URL})',patient);

  }
  findByPatient(nomp: String): Observable<Patient>{
    return this.http.get<Patient>('${this.API_URL}/${nomp}');

  }
  EditePatient(idpatient: number, patient:Patient):Observable<Object>{
    return this.http.put('${this.API_URL}/${idpatient}',patient);

  }
  deletePatient(idpatient: number):Observable<object>{
    return  this.http.delete('${this.API_URL}/${idpatient }')

  }
}
