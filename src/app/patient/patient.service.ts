import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from './patient.model';
@Injectable()
export class PatientService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
  patientItemChanged=new Subject<Patient[]>();
  private patientDetails:Patient[]=[];
  constructor(private http: HttpClient) { }

  createPatient(patient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, patient);
  }
}