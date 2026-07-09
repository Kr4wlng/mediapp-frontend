import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { Consult } from '../../../model/consult';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Exam } from '../../../model/exam';
import { ConsultService } from '../../../services/consult.service';

@Component({
  selector: 'app-search-dialog',
  imports: [MaterialModule, DatePipe],
  templateUrl: './search-dialog.component.html',
  styleUrl: './search-dialog.component.css',
})
export class SearchDialogComponent implements OnInit{

  consult: Consult;
  exams: Exam[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Consult,
    private consultService: ConsultService
  ){}

  ngOnInit(): void {
    this.consult = { ... this.data};
    this.consultService.getExamsByIdConsult(this.consult.idConsult).subscribe(data => this.exams = data);
  }

}
