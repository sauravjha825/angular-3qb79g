import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientComponent } from './patient/patient.component';
import { MenuComponent } from './menu/menu.component';
import { PatientService } from './patient/patient.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, FormsModule,
    ReactiveFormsModule, ],
  declarations: [ AppComponent, HelloComponent, PatientRegistrationComponent, PatientListComponent, PatientEditComponent, PatientDetailsComponent, PatientComponent, MenuComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PatientService]
})
export class AppModule { }
