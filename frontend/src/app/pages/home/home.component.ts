import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login/login.service';
import { LoginComponent } from '../login/login.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  s = null;
  mostrarMenu: boolean = false;
  constructor(public dialog: MatDialog, private login: LoginService) { }

  ngOnInit(): void {
    
   this.login.mostrarMenuEmitter.subscribe(
    result =>{
      this.mostrarMenu = result;
    }
  );
  }
  logout(){
    localStorage.clear();
    window.location.href = "/login"
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '85%',
      height: '90%',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });

  }
}