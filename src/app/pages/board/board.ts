import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { toDo } from '../../models/todo.models';

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

  todos: toDo[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false }
  ];

  drop(event: CdkDragDrop<any[]>) {
    console.log('Item dropped:', event);
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
