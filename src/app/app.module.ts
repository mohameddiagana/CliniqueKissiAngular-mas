import { PatientListComponent } from './patient-list/patient-list.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PatientsComponent } from './patients/patients.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MedecinsComponent } from './medecins/medecins.component';
// import { LoginComponent } from './login/login.component';
// import { InscriptionComponent } from './inscription/inscription.component';
import { ServiceComponent } from './service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

/**
 * date 02/11/2023
 * propriete Mohamed DIAGANA
 */


@NgModule({
  declarations: [
    AppComponent,
    RendezVousComponent,
    MedecinsComponent,
    ServiceComponent,
    PatientListComponent,
    UpdatePatientComponent,
    AddPatientComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
