import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collect } from 'src/app/models/collect.model';

@Injectable({
  providedIn: 'root'
})
export class ServCollectService {
  apiURL = 'http://localhost:3333/collect';
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
  public postCollect(collect: any): Observable <Collect>{
    console.log (collect);
    return this.httpClient.post<any>(this.apiURL, collect, this.httpOptions)
  }
}
