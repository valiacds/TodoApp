import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent {

  loggedIn = true;

  x = 6;

  userName = 'ada';

  number = 5;

  now = new Date();
 
}
