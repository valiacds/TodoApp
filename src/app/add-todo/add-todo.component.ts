import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'appAddTodo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() callAddTodo = new EventEmitter();
}
