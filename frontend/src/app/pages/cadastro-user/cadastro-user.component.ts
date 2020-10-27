import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {
 
    hide = true;
  

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    window.localStorage.setItem('id', '1')
     //window.localStorage.clear();
  
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
