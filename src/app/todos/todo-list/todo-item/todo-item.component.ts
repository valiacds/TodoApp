import { Component, Input, Output,  EventEmitter} from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';

@Component({
  selector: 'appTodoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todoIndex;
  @Input() todoObj;
  
  constructor(private _todoServes:TodoServesService) {
  }

  removeTodo(idx) {
    this._todoServes.removeTodo(idx);
  }

  toggleComplete(idx) {
    this._todoServes.toggleComplete(idx);
  }

}
