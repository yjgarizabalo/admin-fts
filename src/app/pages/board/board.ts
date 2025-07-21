import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { DialogComponent } from "../../components/dialog/dialog";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { toDo, Column } from '../../models/todo.models';

@Component({
  selector: 'app-board',
  imports: [Navbar, DragDropModule, CommonModule],
  templateUrl: './board.html',
  styles: [`
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 270ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
  `]

})
export class Board {
  constructor(public dialog: Dialog) { }

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: false }
      ]
    },
    {
      title: 'Doing',
      todos: [
        { id: 4, title: 'Task 4', completed: false },
        { id: 5, title: 'Task 5', completed: false }
      ]
    },
    {
      title: 'Done',
      todos: [
        { id: 6, title: 'Task 6', completed: true },
        { id: 7, title: 'Task 7', completed: true }
      ]
    }
  ];

  todos: toDo[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false }
  ];

  doing: toDo[] = [
    { id: 4, title: 'Task 4', completed: false },
    { id: 5, title: 'Task 5', completed: false }
  ]

  done: toDo[] = [
    { id: 6, title: 'Task 6', completed: true },
    { id: 7, title: 'Task 7', completed: true }
  ];

  drop(event: CdkDragDrop<toDo[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  addColumn() {
    this.columns.push({
      title: "Nueva Columna",
      todos: []
    });
  }

  openDialog(todo: toDo) {
    const dialogRef = this.dialog.open(DialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        todo: todo
      }
    });
    dialogRef.closed.subscribe((output: any) => {
      console.log('Dialog closed', output);
    });
  }
}
