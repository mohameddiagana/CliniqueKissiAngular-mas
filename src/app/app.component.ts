import { Component } from '@angular/core';
import { PatientService } from './services/patient.service'
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
  ngOnInit() {}
  //   console.log('on init patient...........')
  //   this.patientService.Getlist_patients().subscribe((datas:any) =>{
  //     this.patients = datas
  //   })
  // }

}
