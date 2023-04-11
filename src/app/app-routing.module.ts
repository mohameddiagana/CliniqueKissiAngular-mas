import { InscriptionComponent } from './inscription/inscription.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { PatientsComponent } from './patients/patients.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import {AddPatientComponent} from "./add-patient/add-patient.component";

const routes: Routes = [
  {path:"patients", component : PatientsComponent},
  {path:"rendez-vous", component : RendezVousComponent},
  {path:"medecins", component : MedecinsComponent},
  // {path:"services", component : ServicesComponent},
  {path:"login", component : LoginComponent},
  {path:"inscription", component : InscriptionComponent},
  {path:"NouveauPatient", component : AddPatientComponent},

  // {path:"", redirectTo : 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
