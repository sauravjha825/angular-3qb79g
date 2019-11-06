import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Patient} from './patient.model';
@Injectable()
export class PatientService {
  patientItemChanged=new Subject<Patient[]>();
  private patientDetails:Patient[]=[];
  constructor() { }
addPatientDetails(patientinfo:Patient){
   this.patientDetails.push(patientinfo);
   this.patientItemChanged.next(this.patientDetails.slice());
 }
 getPatient(){
   return this.patientDetails.slice();
 }
}