import { Component, OnInit } from '@angular/core';
import {Patient} from "../patient";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients!: Patient[] ;

  constructor(private http: HttpClient, private router: Router, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.getPatient();

  }
  private getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients = data;
    })
  }

  NouveauPatient() {
    this.router.navigateByUrl('/NouveauPatient')
  }


  updatepatient(idpatient: number) {
    this.router.navigate(['/update-patient',idpatient]);

  }

  deletepatient(idpatient: number) {
  this.patientService.deletepatient(idpatient).subscribe(data=>{
    console.log(data);
    this.getPatient();

})
  }
}
