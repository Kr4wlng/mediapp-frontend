import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { Medic } from '../../model/medic';
import { MedicService } from '../../services/medic.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MedicDialogComponent } from './medic-dialog/medic-dialog.component';

@Component({
  selector: 'app-medic',
  imports: [MaterialModule],
  templateUrl: './medic.component.html',
  styleUrl: './medic.component.css',
})
export class MedicComponent implements OnInit{

  dataSource: MatTableDataSource<Medic>;

  columnsDefinitions = [
    { def: 'idMedic', label: 'idMedic', hide: true },
    { def: 'primaryName', label: 'primaryName', hide: false },
    { def: 'surname', label: 'surname', hide: false },
    { def: 'actions', label: 'actions', hide: false }
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private medicService: MedicService,
    private _dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.medicService.findAll().subscribe(data => this.createTable(data));
  }

  createTable(data: Medic[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getDisplayColumns(){
    return this.columnsDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }

  openDialog(medic?: Medic){
    this._dialog.open(MedicDialogComponent, {
      width: '750px',
      data: medic,
    });
  }

}
