import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {
 
    hide = true;
    public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private login : LoginService,

    ) { }

  ngOnInit(): void {
    window.localStorage.setItem('id', '1')
     //window.localStorage.clear();
     this.form = this.fb.group({
       nome:['', Validators.required],
       usuario:['', Validators.required],
       senha:['', Validators.required],
     })
  
  }

  cadastraUsuario(){
    this.login.postUser(this.form.value).subscribe(result => {
      console.log(result)
      this._snackBar.open(result.nome+" cadastrado com sucesso!", "ok", {
        duration: 2000,
      });
    })
  }
  
   
  

}
