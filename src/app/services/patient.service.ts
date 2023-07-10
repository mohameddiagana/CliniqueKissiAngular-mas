
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import {environment} from "../../environments/environment";
import {Patient} from "../Model/patient";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  readonly API_URL = "http://localhost:7075/api/v1/auth"

  readonly ENDPOINT_PATIENTS = "/patient/liste"
  constructor(private httpClient: HttpClient) {
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
