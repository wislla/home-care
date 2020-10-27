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
  public getCollectSelected(): Observable<Collect[]>{
    return this.httpClient.get<Collect[]>('http://localhost:3333/collectSelected')
  }
  public getCollectByDate(date:any): Observable<number>{
    return this.httpClient.get<number>(this.apiURL+'Date/'+date);
  }
  public postCollect(collect: any): Observable <any>{
    
    return this.httpClient.post<any>(this.apiURL, collect, this.httpOptions);
  }
}
