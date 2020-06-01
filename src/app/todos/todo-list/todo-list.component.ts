import { Component, OnInit } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';

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
}
