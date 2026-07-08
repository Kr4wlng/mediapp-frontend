import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/patient';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatOption } from "@angular/material/select";
import { ConsultDetail } from '../../model/consultDetail';

@Component({
  selector: 'app-consult-wizard',
  imports: [MaterialModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './consult-wizard.component.html',
  styleUrl: './consult-wizard.component.css',
})
export class ConsultWizardComponent implements OnInit{

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  patients: Patient[];
  patients$: Observable<Patient[]>

  minDate: Date = new Date();
  details: ConsultDetail[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ){

  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      patient: [ new FormControl(), Validators.required ],
      consultDate: [ new FormControl(new Date()), Validators.required ],
      exam: [ new FormControl(), Validators.required ],
      diagnosis: new FormControl('', Validators.required),
      treatment: new FormControl('', Validators. required),
    });

    this.secondFormGroup = this.formBuilder.group({});
    this.patients$ = this.patientService.findAll();
  }

  getDate(e: any){
    console.log(e.value);
  }

  addDetail(){
    const det = new ConsultDetail();
    det.diagnosis = this.firstFormGroup.value['diagnosis'];
    det.treatment = this.firstFormGroup.value['treatment'];

    this.details.push(det);
  }

  removeDetail(index: number){
    this.details.splice(index, 1);
  }

}
