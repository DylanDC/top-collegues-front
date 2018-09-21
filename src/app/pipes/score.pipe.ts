import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {
  transform(value: any): any {
    if (value > 0)
      return `<span class="text-success"><h4>+${value}<h4></span>`;
    else if (value < 0)
      return `<span class="text-danger"><h4>${value}<h4></span>`;
    else if (value === 0)
      return `<span class="text-primary"><h4>${value}<h4></span>`;

  }

}
