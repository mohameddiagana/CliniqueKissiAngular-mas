import { Component, OnInit } from '@angular/core';
import {PatientService} from "../services/patient.service";
import {Patient} from "../patient";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  idpatient!: number;
  patient: Patient = new Patient();
  constructor(private patientService: PatientService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.idpatient = this.router.snapshot.params['idpatient'];

    this.patientService.findByPatientByidpatient(this.idpatient).subscribe(data=>{
      this.patient = data;
    }, error => console.log(error));


  }
  onSubmit() {
  this.patientService.updatePatient(this.idpatient, this.patient).subscribe(data=>{
  this.goToPatientList();

  }
  ,error => console.log(error));

  }
  goToPatientList(){
    this.route.navigate(['/patient-list']);
  }

}
