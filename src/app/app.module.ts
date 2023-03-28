
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    RendezVousComponent,
    MedecinsComponent,
    LoginComponent,
    InscriptionComponent,
    ServiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
