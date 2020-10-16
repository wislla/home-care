import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collect } from 'src/app/models/collect.model';

@Injectable({
  providedIn: 'root'
})
export class CollectTodayServiceService {
  apiURL = 'http://localhost:3333/collectToday';
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json', 
    })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getCollect(): Observable<Collect[]>{
    return this.httpClient.get<Collect[]>(this.apiURL)
  }
}