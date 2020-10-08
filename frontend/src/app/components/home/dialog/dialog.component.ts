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
 

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    private _adapter: DateAdapter<any>
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
     ponto_ref: ['', Validators.required],
     exames: [''],
     dt_coleta: ['', Validators.required],
     obs: [''],
     valor_total: [''],
     recebido: [''],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
