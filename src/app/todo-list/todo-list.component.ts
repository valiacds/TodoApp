import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appTodoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

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
  ]

  addTodo(todoTitle: string) {
    this.todos.push({
      'name': todoTitle,
      'complete': false
    });
  }

  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }

  toggleComplete(todoTitle: string){
    let arrIdx = this.todos.findIndex(todo => todo.name === todoTitle);
    this.todos[arrIdx].complete = !this.todos[arrIdx].complete;
  }

  somethingIsClicked() {
    console.log
  }
}
