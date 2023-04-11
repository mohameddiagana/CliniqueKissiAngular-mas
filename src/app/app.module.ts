
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {DatePipe} from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ServiceComponent } from './service/service.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddPatientComponent } from './add-patient/add-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    RendezVousComponent,
    MedecinsComponent,
    LoginComponent,
    InscriptionComponent,
    ServiceComponent,
    AddPatientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
