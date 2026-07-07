import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule } from '@angular/forms';
import { Medic } from '../../../model/medic';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-medic-dialog',
  imports: [MaterialModule, FormsModule],
  templateUrl: './medic-dialog.component.html',
  styleUrl: './medic-dialog.component.css',
})
export class MedicDialogComponent implements OnInit{

  medic: Medic;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Medic
  ){}

  ngOnInit(): void {
    this.medic = { ...this.data} ;
  }

}
