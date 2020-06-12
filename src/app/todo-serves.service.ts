import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TodoInterface } from 'src/app/todo';
import { ApiService } from 'src/app/api.service';

@Injectable({
  'providedIn': 'root'
})

export class TodoServesService {

  todos:TodoInterface[] = [];
      
  constructor( private api:ApiService ) {}
  
  getTodos():Observable<TodoInterface[]> {
    return this.api.fetchTodos();
  }

  addTodo(newTodo:TodoInterface):Observable<TodoInterface[]> {
    return this.api.addTodo(newTodo);
  }

  removeTodo(idx:number):Observable<TodoInterface[]> {
    return this.api.removeTodo(idx);
  }

  updateTodo(todo:TodoInterface):Observable<TodoInterface[]> {
    return this.api.updateTodo(todo);
  }
}
