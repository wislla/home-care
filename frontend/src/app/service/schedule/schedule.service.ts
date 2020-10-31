import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collect } from 'src/app/models/collect.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  apiURL = `${environment.API}collect`;

  constructor(
    private httpClient: HttpClient,
  ) { }


  public getAllCollect(): Observable<Collect[]>{
    return this.httpClient.get<Collect[]>(this.apiURL)
  }
}
