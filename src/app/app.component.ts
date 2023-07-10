import { Component } from '@angular/core';
import { PatientService } from './services/patient.service'
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {OnInit} from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PatientService]
})
export class AppComponent  implements OnInit{
  title = 'cliniqueKissiFront';
  patients!: Array<any>

  constructor(private  patientService: PatientService) {
  }
  ngOnInit() {
    console.log('Enregistre on  init patient...........')
    this.patientService.getPatientList().subscribe((data) =>{
      this.patients = data
    })
  }

}
