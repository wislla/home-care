import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { MatSnackBar } from '@angular/material/snack-bar';

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
  @ViewChild("dt_coleta") dt_coletaRef: ElementRef;
  @ViewChild("previsao") previsaoRef: ElementRef;
  previsaoV : any;
  vars: string = "teste";
  quant: number ;
  see: boolean = false;

  quantH: number ;
  seeH: boolean = false;

   order(previsao) {
    if (previsao == '07h10 - 8h')
        return "1"
        if (previsao == '08h10 - 9h')
        return "2"
        if (previsao == '10h - 11h')
        return "3"
        if (previsao == '11h - 12h')
        return "4"
        if (previsao == '14h30 - 16h')
        return "5"
  }
  

  public form: FormGroup;
  seleted = '7h10 - 8h';
  constructor(
    private fb: FormBuilder,
    private rest: ServCollectService,
    public dialogRef: MatDialogRef<DialogComponent>,
    private _adapter: DateAdapter<any>,
    private router : Router,
    private _snackBar: MatSnackBar,
    ) { }
    french() {
      this._adapter.setLocale('fr');
    }
  ngOnInit(): void {
    
    this.form = this.fb.group({
     nome: ['', Validators.required],
     rg: [''],
     cpf: [''],
     dt_nascimento: [''],
     telefone: ['', Validators.required],
     convenio: [''],
     num_carteira: [''],
     endereco: ['', Validators.required],
     previsao: [''],
     ponto_ref: ['', Validators.required],
     exames: [''],
     dt_coleta: ['', Validators.required],
     obs: [''],
     valor_total: [0],
     recebido: [0],
     isolamento: [0],
    })
  }

  foods = [
    {value: '7h10 - 8h', viewValue: '7h10 - 8h'},
    {value: '8h10 - 9h', viewValue: '8h10 - 9h'},
    {value: '10h - 11h', viewValue: '10h - 11h'},
    {value: '11h - 12h', viewValue: '11h - 12h'},
    {value: '14h30 - 16h', viewValue: '14h30 - 16h'}

  ];
  getHorario(){
    this.previsaoV = +this;
    console.log(this.previsaoRef['_value']);

  }
  key(){
    
    this.vars=(this.dt_coletaRef.nativeElement.value);
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

  verificarHorario(){

    let x = moment(this.dt_coletaRef.nativeElement.value, "DD/MM/YYYY");
    console.log("nova"+x)
    var dtC = x.format("YYYY-MM-DD");

    var data = dtC;
    var hora = this.order(this.previsaoRef['_value']);
   console.log( this.previsaoRef);
    this.rest.getCollectByHour(data, hora).subscribe(result =>{
      console.log('neste h' + result);
      this.key();
      this.quantH = result ;
      this.seeH = true;
    })
  }

  

  
  createCollect(){
    if(this.form.valid){

   
      let newDate: moment.Moment = moment.utc(this.form.value.dt_nascimento).local();
      this.form.value.dt_nascimento = newDate.format("YYYY-MM-DDTHH:mm:ss");

      let newDateC: moment.Moment = moment.utc(this.form.value.dt_coleta).local();
      this.form.value.dt_coleta = newDateC.format("YYYY-MM-DDTHH:mm:ss");
      
      this.rest.postCollect(this.form.value).subscribe(result =>{
        console.log(this.form.value);
        this.dialogRef.close();
        this.form.reset;
        //this.router.navigate(['/home']);
       window.location.reload();
      })

    }else{
      this._snackBar.open("Preencha todos os campos obrigatorios!", "OK", {
        duration: 2000,
      });
    }
  }

  onNoClick(): void {
    
    this.dialogRef.close();
    this,this.form.reset;
  }
  

}
