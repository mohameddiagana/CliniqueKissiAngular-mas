
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients! :Array<any>
  constructor(private PatientService: PatientService, private router:Router,private http: HttpClient

  ){ }

  ngOnInit(): void {
    this.PatientService.getAllpatient().subscribe({
      next : (data )=> {

        this.patients=data;
      },

    });

  }
  handleDeletePatient(p: any){
    let index = this.patients.indexOf(p);
    if(confirm('Are you sure to delete the patient?'))
      this.patients.splice(index,1);

  }

  NouveauPatient() {
    this.router.navigateByUrl("/NouveauPatient")
  }

  // Update(p: any,idpatient: number) {
  //   this.router.navigate(['Edit-patient',idpatient]);




}
