import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <!-- <label>Label: <input #userNameTag type="text"></label>
    <button (click)="displayInput(userNameTag.value)">OK</button>
    <div>{{userName}}</div> -->
    <p>userName in Parent: {{userName}}</p>
    <app-child [userNameParent]="userName"
    (childEvent)='changeUserNameParent($event);'></app-child>
  `,
  styles: []
})
export class ParentComponent {

  userName = 'pesho';

  displayInput(inputValue) {
    this.userName = inputValue;
  }

  changeUserNameParent(param) {
    console.dir(param);
    this.userName = 'CHILD WAS CLIECKED';
  }

  

}
