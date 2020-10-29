import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ServCollectService } from 'src/app/service/collect/serv-collect.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DialogComponent implements OnInit {
 
  vars: string = "teste";
  quant: number ;
  see: boolean = false;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: ServCollectService,
    public dialogRef: MatDialogRef<DialogComponent>,
    private _adapter: DateAdapter<any>,
    private router : Router,
    ) { }
    french() {
      this._adapter.setLocale('fr');
    }
  ngOnInit(): void {
    
    this.form = this.fb.group({
     nome: ['', Validators.required],
     rg: [''],
     cpf: [''],
     dt_nascimento: ['2020-10-06T07:30:00Z'],
     telefone: ['', Validators.required],
     convenio: [''],
     num_carteira: [''],
     endereco: ['', Validators.required],
     ponto_ref: ['', Validators.required],
     exames: [''],
     dt_coleta: ['', Validators.required],
     obs: [''],
     valor_total: [0],
     recebido: ['1'],
    
    })
  }
  key(evento: KeyboardEvent){
    console.log("buscou")
    
    this.vars=((<HTMLInputElement>evento.target).value);
    console.log(this.vars );
    
    let x = moment(this.vars, "DD/MM/YYYY");
    console.log("nova"+x)
    this.vars = x.format("YYYY-MM-DD");
    

    this.rest.getCollectByDate(this.vars).subscribe(result =>{
      
      console.log(result);
      this.quant = result;
      this.see = true;
    })
    console.log( this.vars );
  }
  createCollect(){
    let newDate: moment.Moment = moment.utc(this.form.value.dt_nascimento).local();
    this.form.value.dt_nascimento = newDate.format("YYYY-MM-DDTHH:mm:ss");

    let newDateC: moment.Moment = moment.utc(this.form.value.dt_coleta).local();
    this.form.value.dt_coleta = newDateC.format("YYYY-MM-DDTHH:mm:ss");
    
    this.rest.postCollect(this.form.value).subscribe(result =>{
      
      this.dialogRef.close();
      this.form.reset;
      this.router.navigate['/home']
     // window.location.reload();
    })

    
  }

  onNoClick(): void {
    
    this.dialogRef.close();
    this,this.form.reset;
  }

}
