import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTodoCompleted]'
})
export class TodoCompletedDirective {

  constructor(private el: ElementRef) {
    console.dir(el);
    el.nativeElement.style.textDecoration ="line-through";
  }

}
