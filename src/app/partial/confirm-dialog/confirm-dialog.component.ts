import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm-dialog.component.html',
  styles: []
})
export class ConfirmDialogComponent{
  title: string;
  message: string;

   constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {   
    this.title = data.title;
    this.message = data.message;
  } 

  onClose(): void {   
    this.dialogRef.close(true);   
  }

  dismiss(){
    this.dialogRef.close(false);   
  }

}



export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }

}