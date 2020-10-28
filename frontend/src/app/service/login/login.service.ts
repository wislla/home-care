import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = 'http://localhost:3333/';
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json', 
    })
  }
  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * postUser
   */
  public postUser(user: any): Observable <any> {
    return this.httpClient.post<any>(this.apiURL + 'cadastro', user, this.httpOptions);
  }
  /**
   * postLogin
   */
  public postLogin(user:any): Observable <any> {
    
      return this.httpClient.post<any>(this.apiURL+'session', user, this.httpOptions)
    

    
  }
}
