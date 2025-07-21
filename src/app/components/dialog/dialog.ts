import { Component, Inject } from '@angular/core';
import { DialogRef, DialogModule, DIALOG_DATA} from '@angular/cdk/dialog';
import { Btn } from '../btn/btn';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { toDo } from '../../models/todo.models';

interface InputData {
  todo: toDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-dialog',
  imports: [DialogModule, FontAwesomeModule, Btn],
  templateUrl: './dialog.html'
})
export class DialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: toDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close({
      rta: true
    });
  }

  rtaWasTrue(rta: boolean) {
    this.dialogRef.close({rta});
  }
}
