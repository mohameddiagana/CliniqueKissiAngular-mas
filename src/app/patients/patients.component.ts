
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

patients! :Array<any>
// errorMessage! : string
  constructor(private PatientService: PatientService

    ){ }

  ngOnInit(): void {
   this.PatientService.getAllpatient().subscribe({
    next : (data )=> {

      this.patients=data;
    },
    // error :(errs)=>{
    //   this.errorMessage=errs;
    // }
   });

  }
    handleDeletePatient(p: any){
      let index = this.patients.indexOf(p);
      if(confirm('Are you sure to delete the patient?'))
      this.patients.splice(index,1);

    }

}

