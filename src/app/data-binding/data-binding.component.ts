import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <h2 id="h2" [style.border] = "'5px solid red'" [ngClass]="multipleClasses"
    [class.red] = 'setRedClass'>Variable interpolation: {{userName}}</h2>
    <input type="text" id = 'i1' 
    [class.red] = 'setRedClass'
    [value]='userName'
    [disabled]='disableName' 
    [attr.data-logged] = 'userLoggedIn'>
    <div>
      <button (click)="toggleRedClass()">Toggle Red Class</button>
      <button (click) = "changeColorClass()">Change Color Class</button>
    </div>
  `,
  styles: [`
    .red{
      background: #F99;
    }
    .green{
      background: #9F9;
    }
    .big{
      font-size: 4em;
    }
  `]
})
export class DataBindingComponent {

  userName = 'Ada';
  userLoggedIn = 'no';
  disableName = false;
  setColorClass = 'red';
  setRedClass = true;
  multipleClasses = {
    'red': true,
    'big': true
  };

  changeUserName() {
    this.userName = '';
  }

  changeColorClass() {
    this.setColorClass = 'green';
  }

  toggleRedClass() {
    this.setRedClass = !this.setRedClass;

  }



}
