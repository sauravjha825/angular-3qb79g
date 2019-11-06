import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Patient } from '../patient.model';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  patient: Patient = new Patient();
  submitted = false;
  constructor(private pService:PatientService, private router: Router) { }

  ngOnInit() {
  }
  newPatient(): void {
    this.submitted = false;
    this.patient = new Patient();
  }
  save() {
    this.pService.createPatient(this.patient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();
    this.gotoList();
  }
   onSubmit(){
      this.submitted = true;
      this.save(); 
   }
   gotoList() {
    this.router.navigate(['/viewpatient']);
  }
}