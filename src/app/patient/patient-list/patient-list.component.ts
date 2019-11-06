import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient.model';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patientList:Patient[]=[];
  constructor(private pService:PatientService) { }

  ngOnInit() {
    this.patientList= this.pService.getPatient();
  }

}