import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:TodoInterface[] = [];

  constructor() {}

  refreshList(todosList) {
    this.todos = todosList;
  }
}
