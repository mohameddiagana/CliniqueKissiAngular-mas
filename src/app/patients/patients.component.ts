//
// import { PatientService } from './../services/patient.service';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import {HttpClient} from "@angular/common/http";
//
// @Component({
//   selector: 'app-patients',
//   templateUrl: './patients.component.html',
//   styleUrls: ['./patients.component.css']
// })
// export class PatientsComponent implements OnInit {
//
//   patients! :Array<any>
//   constructor(private PatientService: PatientService, private router:Router,private http: HttpClient
//
//   ){ }
//
//   ngOnInit(): void {
//     this.PatientService.getAllpatient().subscribe({
//       next : (data: any )=> {
//
//         this.patients=data;
//       },
//
//     });
//
//   }
//
//   NouveauPatient() {
//     this.router.navigateByUrl("/NouveauPatient")
//   }
//
//   // Update(p: any,idpatient: number) {
//   //   this.router.navigate(['Edit-patient',idpatient]);
//
//
//
//
// }
