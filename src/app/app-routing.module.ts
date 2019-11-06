import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientComponent } from './patient/patient.component';

const appRoutes: Routes=[
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'addpatient', component:PatientRegistrationComponent},
  {path:'viewpatient', component:PatientListComponent}
  
];
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)] //routerModule registers our appRoutes using forRoot method
  ],
  exports:[RouterModule],// we wish to used this router module as an import in our app-module, so defined in export
  declarations: []
})
export class AppRoutingModule { }