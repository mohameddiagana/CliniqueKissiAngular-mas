// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {HttpClient} from "@angular/common/http";
//
// @Component({
//   selector: 'app-inscription',
//   templateUrl: './inscription.component.html',
//   styleUrls: ['./inscription.component.css']
// })
// export class InscriptionComponent implements OnInit {
//
//
//   successMessage:string =""
//
//   inscriptionForm!:FormGroup
//
//   constructor(private fb: FormBuilder) { }
//
//   ngOnInit(): void {
//     this.inscriptionForm = this.fb.group({
//       firstname: ['',[Validators.required]],
//       lastname: ['',[Validators.required]],
//       // mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
//       email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
//       password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{8,}")]]
//     })
//   }
//
//   inscription(){
//     this.successMessage = "Successfully Registered..."
//     // console.log(this.inscriptionForm)
//   }
//
//
// }
