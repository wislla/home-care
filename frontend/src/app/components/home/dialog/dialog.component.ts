import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

 // public form: FormGroup;

  constructor(
    //private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>
    ) { }
  
  ngOnInit(): void {
    //this.form = this.fb.group({
     // nome: ['', Validators.required]
    //})
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
