import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collect } from 'src/app/models/collect.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectTodayServiceService {
  apiURL = environment.API+'collectToday';
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json', 
    })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getCollect(): Observable<Collect[]>{
    try {
      return this.httpClient.get<Collect[]>(this.apiURL)
    } catch (error) {
      console.log(error)
    }
    
  }
  public postCollect(id: any): Observable <any>{
    
    return this.httpClient.post<any>(environment.API+'collectDate', id, this.httpOptions);
  }
}
