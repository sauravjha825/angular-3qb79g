import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  patientForm: FormGroup;
  constructor(private pService:PatientService) { }

  ngOnInit() {
    this.InitForm();
  }
   onSubmit(){
     this.pService.addPatientDetails(this.patientForm.value);
   }
private InitForm(){
  let fnames='';
  let lnames='';
  let emailid='';
  let dob='';
  let mob='';
  let addr='';
  let genders='';
  let image='';
   this.patientForm=new FormGroup({
     'fname':new FormControl(fnames, Validators.required),
     'lname':new FormControl(lnames, Validators.required),
     'email':new FormControl(emailid, Validators.required),
     'bday':new FormControl(dob, Validators.required),
     'contact':new FormControl(mob, Validators.required),
     'address':new FormControl(addr, Validators.required),
     'gender':new FormControl(genders, Validators.required),
     'imagePath':new FormControl(image,Validators.required),
   });
}
}