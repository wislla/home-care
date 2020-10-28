import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  msg = false;
  aut= false;
  constructor(private login : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(user, pass){
    this.login.postLogin({user, pass}).subscribe(result=>{
     if(result!=0){
       this.aut = true;
      
      window.localStorage.setItem('user',user)
      this.router.navigate(['/selected']);
     }
      
      else
      this.msg = true;
    })
    
  }

}
