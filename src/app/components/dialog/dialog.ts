import { Component } from '@angular/core';
import { DialogRef, DialogModule} from '@angular/cdk/dialog';
// import {faClose} from '@fontawesome/angular-fontawesome';

@Component({
  selector: 'app-dialog',
  imports: [DialogModule  ],
  templateUrl: './dialog.html'
})
export class DialogComponent {

  constructor(public dialogRef: DialogRef<any>) {}

  close() {
    this.dialogRef.close();
  }
}
