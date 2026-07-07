import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Medic } from '../model/medic';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MedicService extends GenericService<Medic>{

  constructor(protected override http: HttpClient){
    super(http, `${environment.HOST}/medics`)
  }

}
