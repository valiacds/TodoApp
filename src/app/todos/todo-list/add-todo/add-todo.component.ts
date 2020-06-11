import { Component } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';

@Component({
  selector: 'appAddTodo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(private _todoServes:TodoServesService) {
  }

  addTodo(todoTitle: string) {
    this._todoServes.addTodo(todoTitle).subscribe(
      resp => console.log(resp)
    )
  }
}
