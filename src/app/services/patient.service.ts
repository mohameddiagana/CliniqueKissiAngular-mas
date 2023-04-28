
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import {environment} from "../../environments/environment";
import {Patient} from "../patient";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  readonly API_URL = "http://localhost:7075/api/v1/auth/"

  readonly ENDPOINT_PATIENTS = "/patient/liste"
 //  private patients!: [];

  constructor(private httpClient: HttpClient) {
    // @ts-ignore
    // this.patients! = [
    //   {
    //     idpatient: 1,
    //     codep: "c002",
    //     nomp: "diagana",
    //     prenom: "mohamed sarr",
    //     email: "ms@gmail.com",
    //     tel: 55458787,
    //     sexe: "male",
    //     datenaissance: "12/05/1990",
    //     adresse: "poto6",
    //     profession: "devops",
    //     CIN: 125555581,
    //     age: 60,
    //
    //   }
    //
    //
    // ]
  }
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.API_URL+ this.ENDPOINT_PATIENTS);
    //return of(this.patients);


  }

  NouveauPatient(patient: Patient):Observable<Object>{
    return this.httpClient.post(this.API_URL+ this.ENDPOINT_PATIENTS,patient);

  }
  findByPatientByidpatient(idpatient: number):Observable<Patient>{
    return this.httpClient.get<Patient>('${this.API_URL}/${idpatient}');

  }
  updatePatient(idpatient: number, patient:Patient):Observable<object>{
    return this.httpClient.put('${this.API_URL}/${idpatient}',patient);
  }

  deletepatient(idpatient: number) :Observable<Object>{
    return this.httpClient.delete('${this.API_URL}/${idpatient}');

  }


}
