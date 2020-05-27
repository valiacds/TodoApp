import { Injectable } from '@angular/core';

@Injectable({
  'providedIn': 'root'
})

export class TodoServesService {
  todos = [
    {
      'id': 1,
      'name': 'Todo Item 1',
      'complete': false
    },
    {
      'id': 2,
      'name': 'Todo Item 2',
      'complete': true
    },
    {
      'id': 3,
      'name': 'Todo Item 3',
      'complete': true
    },
    {
      'id': 4,
      'name': 'Todo Item 4',
      'complete': false
    }
  ];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(todoTitle: string) {
    this.todos.push({
      'id': this.todos.length + 1,
      'name': todoTitle,
      'complete': false
    });
  }

  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }
  
}
