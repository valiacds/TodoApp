import { Component, Input, Output,  EventEmitter} from '@angular/core';
import { TodoInterface } from 'src/app/todo';

@Component({
  selector: 'appTodoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoIndex;
  @Input() todoObj:TodoInterface;
  @Output() todoComplete = new EventEmitter();
  @Output() todoRemove = new EventEmitter();
    
  constructor() {}

  removeTodo(idx: number) {
    this.todoRemove.emit(idx);
  }

  completeTodo(idx: number) {
    this.todoComplete.emit(idx);
  }
}
