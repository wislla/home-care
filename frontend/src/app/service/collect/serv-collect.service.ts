import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collect } from 'src/app/models/collect.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServCollectService {
  apiURL = environment.API+'collect';
  apiURLBase = environment.API;
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
    const user = window.localStorage.getItem('user')
    return this.httpClient.get<Collect[]>(environment.API+'collectSelected/'+user);
  }
  public getCollectDetalhe(id: number): Observable<Collect[]>{
    
    return this.httpClient.get<Collect[]>(environment.API+'collect/'+id);
  }

  public getCollectByDate(date:any): Observable<number>{
    return this.httpClient.get<number>(this.apiURL+'Date/'+date);
  }

  public getCollectByHour(date:any, hour: any): Observable<number>{
    return this.httpClient.get<number>(environment.API+'collect-hour/'+date+'/'+hour);
  }


  public postCollect(collect: any): Observable <any>{
    
    return this.httpClient.post<any>(this.apiURL, collect, this.httpOptions);
  }
}
