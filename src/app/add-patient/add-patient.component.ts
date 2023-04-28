import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../services/patient.service";
import {Router} from "@angular/router";
import {Patient} from "../patient";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient: Patient = new Patient();
  // idpatient: number =0;
  // codep: String ='';
  // nomp: String ='';
  // prenom: String ='';
  // email: String ='';
  // tel: String ='';
  // sexe: String ='';
  // datenaissance: Date= '';
  // profession: String ='';
  // CIN: number =0;
  // age: number =0;
  constructor( private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
  }

  EnregistrerPatient(){
    this.patientService.NouveauPatient(this.patient).subscribe(data=>{
     console.log(data)
      this.goToPatientList();

    },
      error => console.log(error));

  }
  goToPatientList(){
    this.router.navigate(['/patient-list']);
  }


  onSubmit() {
    console.log(this.patient);
    this.EnregistrerPatient();

  }

  // OneSavePatient() {
  //   // @ts-ignore
  //   this.patientService.NouveauPatient(this.onSubmit)
  //     .subscribe(data=>{
  //       alert("Succes Saving Patient");
  //     })

}
