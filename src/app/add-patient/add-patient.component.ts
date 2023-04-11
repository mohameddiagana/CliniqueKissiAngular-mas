import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../services/patient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patientformGroup?: FormGroup
  constructor(private  fb: FormBuilder, private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.patientformGroup = this.fb.group({
      idpatient:[0,Validators.required],
      codep:["",Validators.required],
      nomp:["",Validators.required],
      prenom:["",Validators.required],
      email:["",Validators.required],
      tel:["",Validators.required],
      sexe:["",Validators.required],
      datenaissance:["",Validators.required],
      adresse:["",Validators.required],
      profession:["",Validators.required],
      CIN:["",Validators.required],
      age:["",Validators.required],
    })
  }

  OneSavePatient() {
  this.patientService.Enregistrer(this.patientformGroup?.value)
    .subscribe(data=>{
      alert("Succes Saving Patient");
    })

  }
  Enregistrer(){

  }


}
