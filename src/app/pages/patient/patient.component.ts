import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent implements OnInit{

  patients: Patient[] = [];

  constructor(private patientService: PatientService){}

  ngOnInit(): void {
    this.patientService.findAll().subscribe(data => this.patients = data);
  }

}
