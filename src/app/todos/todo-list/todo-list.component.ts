import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';
import { TodoInterface } from 'src/app/todo';

@Component({
  selector: 'appTodoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input('todosData') todos;
  @Output() refreshList = new EventEmitter();

  constructor(private todoServes:TodoServesService) {}

  ngOnInit() {
    this.todoServes.getTodos().subscribe( data => {
      this.todos = data;
      this.refreshList.emit(this.todos);
    });
  }

  todoAdd(todo:TodoInterface) {
    this.todoServes.addTodo(todo).subscribe( data => {
      todo.id = data['id'];
      this.todos = [...this.todos, todo];
      this.refreshList.emit(this.todos);
    });
  }

  todoComplete(idx: number){
    this.todos[idx].completed = !this.todos[idx].completed;
    this.todoServes.updateTodo(this.todos[idx]).subscribe( data => {
      this.refreshList.emit(this.todos);
    });
  }

  todoRemove(idx: number){
    this.todoServes.removeTodo(this.todos[idx].id).subscribe( data => {
      this.todos.splice(idx, 1);
      this.refreshList.emit(this.todos);
    });
  }
}
