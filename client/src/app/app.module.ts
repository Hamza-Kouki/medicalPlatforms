import { PatientListComponent } from '.';
// import { PatientListComponent } from './patient-list/patient-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { NavPatientComponent } from './nav-patient/nav-patient.component';
// import { PatientListComponent } from './PatientListComponent/PatientListComponent';
import {PatientListComponent} from '.PatientListComponent/PatientListComponent';
import { ConsultationFormsPatienComponent } from './consultation-forms-patien/consultation-forms-patien.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';
// import { NavPatientComponent } from './nav_p_atient/nav-patient.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PatientsComponent,
    NavPatientComponent,
    PatientListComponent,
    ConsultationFormsPatienComponent,
    PharmacyComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
