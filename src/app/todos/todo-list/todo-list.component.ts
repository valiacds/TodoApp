import { Component, OnInit } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';
import { TodoInterface } from 'src/app/todo-serves.service';

@Component({
  selector: 'appTodoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: TodoInterface[] = [];

  constructor(private _todoServes:TodoServesService) {
    this._todoServes.fetchTodos().subscribe( data => {
      this.todos = data;
      this._todoServes.initTodos(this.todos);
    });
  }
}
