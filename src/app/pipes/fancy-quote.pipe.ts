import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fancyQuote'
})
export class FancyQuotePipe implements PipeTransform {

  transform(val): unknown {
    return `!!!${val}!!!`;
  }

}
