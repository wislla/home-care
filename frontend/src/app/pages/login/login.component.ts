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
  msg:boolean = false;
  aut= false;
  constructor(private login : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(user, pass){
    this.login.fazerLogin(user, pass);

    this.msg = !this.login.usuarioEstaAuten();
    
  }

}