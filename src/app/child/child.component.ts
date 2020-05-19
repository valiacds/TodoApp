import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>child works!</p>
    <div>parent user name: {{userNameParent}}</div>
    <button (click)='this.childEvent.emit(4);'>Send to parent</button>
  `,
  styles: []
})
export class ChildComponent {
  @Input() userNameParent;

  @Output() childEvent = new EventEmitter();


}
