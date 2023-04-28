
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {DatePipe} from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MedecinsComponent } from './medecins/medecins.component';

import { ServiceComponent } from './service/service.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    RendezVousComponent,
    MedecinsComponent,

    ServiceComponent,
    AddPatientComponent,
    PatientListComponent,
    UpdatePatientComponent,

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
