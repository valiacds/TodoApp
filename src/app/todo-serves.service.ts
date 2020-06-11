import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { TodoInterface } from 'src/app/todo';

@Injectable({
  'providedIn': 'root'
})

export class TodoServesService {

  todos:TodoInterface[] = [];
  todosURL = 'http://my-json-server.typicode.com/valiacds/JSON-fake-server/todos';
    
  constructor( private http:HttpClient ) {}

  handleHttpErrors(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log(`errorMessage: ${errorMessage}`);
  
    alert(errorMessage);

    return throwError(errorMessage);
  }

  fetchTodos():Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.todosURL).pipe(
      catchError(this.handleHttpErrors)
    );
  }

  initTodos(todoList: TodoInterface[]) {
    this.todos = todoList;
  }

  addTodo(todoTitle: string) {
    let newTodo = {
      'userId': 1,
      // 'id': this.todos.length + 1,
      'title': todoTitle,
      'completed': false
    };

    return this.http.post<TodoInterface[]>(this.todosURL, newTodo).pipe(
      catchError(this.handleHttpErrors)
    );
  }

  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }

  toggleComplete(idx){
    this.todos[idx].completed = !this.todos[idx].completed;
  }
}
