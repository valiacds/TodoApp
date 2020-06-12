import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { TodoInterface } from 'src/app/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  /* todosURL = 'http://my-json-server.typicode.com/valiacds/JSON-fake-server/todos'; */
  todosURL = 'http://localhost:3000/todos';

  handleHttpErrors(error):Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(`errorMessage: ${errorMessage}`);
  
    alert(errorMessage);

    return throwError(errorMessage);
  }

  fetchTodos():Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.todosURL).pipe(
      catchError(this.handleHttpErrors)
    );
  }

  addTodo(newTodo:TodoInterface):Observable<TodoInterface[]> {
    return this.http.post<TodoInterface[]>(this.todosURL, newTodo).pipe(
      catchError(this.handleHttpErrors)
    );
  }

  removeTodo(id:number):Observable<TodoInterface[]> {
    return this.http.delete<TodoInterface[]>(`${this.todosURL}/${id}`).pipe(
      catchError(this.handleHttpErrors)
    );
  }

  updateTodo(todo:TodoInterface):Observable<TodoInterface[]> {
    return this.http.put<TodoInterface[]>(`${this.todosURL}/${todo.id}`, todo).pipe(
      catchError(this.handleHttpErrors)
    );
  }
}
