import { Component, Output, EventEmitter } from '@angular/core';
import { TodoInterface } from 'src/app/todo';

@Component({
  selector: 'appAddTodo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd = new EventEmitter();

  constructor() {}

  addTodo(todo) {
    const newTodo:TodoInterface = {
      'title': todo.value,
      'completed': false
    }

    todo.value = '';
    this.todoAdd.emit(newTodo);
  }
}
