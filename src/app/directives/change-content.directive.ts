import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeContent]'
})
export class ChangeContentDirective {

  constructor(private el: ElementRef) {
    console.dir(el);
    el.nativeElement.innerText="Changed by changeContent Directive. ";
  }

}
