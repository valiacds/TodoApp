import { Component, OnInit } from '@angular/core';
import { TodoServesService } from '../todo-serves.service';

@Component({
  selector: 'appTodoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = [];

  constructor(private _todoServes:TodoServesService) {
    this.todos = this._todoServes.getTodos();
  }

  OnInit() {
    this.todos = this._todoServes.getTodos();
  }

  addTodo(todoTitle: string) {
    this.todos.push({
      'name': todoTitle,
      'complete': false
    });
  }
  
  toggleComplete(todoTitle: string){
    let arrIdx = this.todos.findIndex(todo => todo.name === todoTitle);
    this.todos[arrIdx].complete = !this.todos[arrIdx].complete;
  }
}
