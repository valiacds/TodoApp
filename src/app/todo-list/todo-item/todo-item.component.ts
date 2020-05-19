import { Component, Input, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'appTodoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todoName;
  @Input() todoIndex;

  @Output() callToDelete = new EventEmitter();

}
