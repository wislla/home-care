import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collect } from 'src/app/models/collect.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  apiURL = 'http://localhost:3333/collect';

  constructor(
    private httpClient: HttpClient,
  ) { }


  public getAllCollect(): Observable<Collect[]>{
    return this.httpClient.get<Collect[]>(this.apiURL)
  }
}
