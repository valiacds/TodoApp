import { Component, OnInit } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';
import { TodoInterface } from 'src/app/todo';

@Component({
  selector: 'appTodoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos:TodoInterface[] = [];

  constructor(private _todoServes:TodoServesService) {}

  ngOnInit() {
    this._todoServes.fetchTodos().subscribe( data => {
      this.todos = data;
      this._todoServes.initTodos(this.todos);
    });
  }
}
