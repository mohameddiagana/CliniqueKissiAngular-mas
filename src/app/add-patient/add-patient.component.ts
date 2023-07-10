import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../services/patient.service";
import {Router} from "@angular/router";
import {Patient} from "../Model/patient";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  sexeList: string[] = ["homme","femme"]

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


  constructor( private patientService: PatientService,private router: Router,
    private FormBuilder: FormBuilder) { }

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
  selectedGender = 'M';

}
