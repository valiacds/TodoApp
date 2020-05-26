import { Injectable } from '@angular/core';

@Injectable({
  'providedIn': 'root'
})

export class TodoServesService {
  todos = [
    {
      'name': 'Todo Item 1',
      'complete': false
    },
    {
      'name': 'Todo Item 2',
      'complete': true
    },
    {
      'name': 'Todo Item 3',
      'complete': true
    },
    {
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
      'name': todoTitle,
      'complete': false
    });
  }

  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }
  
}
