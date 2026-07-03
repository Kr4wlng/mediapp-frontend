import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  private url: string = `${environment.HOST}/patients`;

  // La inyección de dependencias en Angular se hacen por constructor
  constructor(private http: HttpClient){}

  findAll(){
    return this.http.get<Patient[]>(this.url);
  }
  
}
