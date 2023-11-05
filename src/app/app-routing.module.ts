

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinsComponent } from './medecins/medecins.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import {AddPatientComponent} from "./add-patient/add-patient.component";
import {PatientListComponent} from "./patient-list/patient-list.component";
import {UpdatePatientComponent} from "./update-patient/update-patient.component";


const routes: Routes = [
  {path:"rendez-vous", component : RendezVousComponent},
  {path:"medecins", component : MedecinsComponent},

  {path:"NouveauPatient", component: AddPatientComponent},
  {path:"patient-list", component : PatientListComponent},

  {path:"update-patient/idpatient", component : UpdatePatientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
