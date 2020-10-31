import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarioAuten: boolean = false;
  mostrarMenuEmitter = new EventEmitter <boolean>();
  apiURL: string = environment.API;
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json', 
    })
  }
  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  /**
   * postUser
   */
  public postUser(user: any): Observable <any> {
    return this.httpClient.post<any>(this.apiURL + 'cadastro', user, this.httpOptions);
  }
  
  public postLogin(user:any): Observable <any> {
    
      return this.httpClient.post<any>(this.apiURL+'session', user, this.httpOptions)
    
  }
  fazerLogin(user, pass){
    this.postLogin({user, pass}).subscribe(result=>{
     if(result!=0){
      this.mostrarMenuEmitter.emit( true);
       this.usuarioAuten = true;
           
      window.localStorage.setItem('user',user);
      this.router.navigate(['/home']);
      
     }
      else{
        this.mostrarMenuEmitter.emit( false);
        this.usuarioAuten = false;
             
      }
      
    })
    
  }
    usuarioEstaAuten(){
      const user = window.localStorage.getItem('user');
      if(user){
        this.mostrarMenuEmitter.emit( true);
        return true;
      }
        
      return false;
      //return this.usuarioAuten;
    }
}