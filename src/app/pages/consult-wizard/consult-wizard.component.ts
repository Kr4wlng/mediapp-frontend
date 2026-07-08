import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/patient';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatOption } from "@angular/material/select";
import { ConsultDetail } from '../../model/consultDetail';
import { Exam } from '../../model/exam';
import { ExamService } from '../../services/exam.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  exams: Exam[];
  examsFiltered$: Observable<Exam[]>;
  examControl: FormControl = new FormControl();

  examsSelected: Exam[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private examService: ExamService,
    private _snackBar: MatSnackBar
  ){

  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      patient: [ new FormControl(), Validators.required ],
      consultDate: [ new FormControl(new Date()), Validators.required ],
      exam: [ this.examControl, Validators.required ],
      diagnosis: new FormControl('', Validators.required),
      treatment: new FormControl('', Validators. required),
    });

    this.secondFormGroup = this.formBuilder.group({});

    this.examsFiltered$ = this.examControl.valueChanges.pipe(map(val => this.filterExams(val)));

    this.loadInitialData();
  }

  loadInitialData(){
    this.patients$ = this.patientService.findAll();
    this.examService.findAll().subscribe(data => this.exams = data);
  }

  filterExams(val: any){
    if(val?.idExam > 0){
      return this.exams.filter(el => 
        el.nameExam.toLowerCase().includes(val.nameExam.toLowerCase()) || el.descriptionExam.toLowerCase().includes(val.descriptionExam.toLowerCase())
      )
    } else {
      return this.exams.filter(el => 
        el.nameExam.toLowerCase().includes(val?.toLowerCase()) || el.descriptionExam.toLowerCase().includes(val?.toLowerCase())
      )
    }
  }

  showExam(val: any){
    return val ? val.nameExam : val;
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

  addExam(){
    const tmpExam = this.firstFormGroup.value['exam'].value;

    if(tmpExam != null){
      if(this.examsSelected.length > 0){
        for(let i = 0; i < this.examsSelected.length; i++){
          const exam = this.examsSelected[i];
          if(exam.idExam == tmpExam.idExam){
            this._snackBar.open('Exam already in list', 'INFO', {
              duration: 2000,
            });
          }
        }
      } else {
        this.examsSelected.push(tmpExam);
      }
    } else {
      this._snackBar.open('Please select an exam', 'INFO', { duration: 2000 });
    }
  }

}
