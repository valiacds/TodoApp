import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export interface TodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  'providedIn': 'root'
})

export class TodoServesService {

  todos: TodoInterface[] = [];
  todosURL = 'http://my-json-server.typicode.com/valiacds/JSON-fake-server/todos';
    
  constructor( private http:HttpClient ) {}

  fetchTodos():Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.todosURL);
  }

  initTodos(todoList: TodoInterface[]) {
    this.todos = todoList;
  }
  
  addTodo(todoTitle: string) {
    this.todos.push({
      'userId': 1,
      'id': this.todos.length + 1,
      'title': todoTitle,
      'completed': false
    });
  }

  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }

  toggleComplete(idx){
    this.todos[idx].completed = !this.todos[idx].completed;
  }
}
