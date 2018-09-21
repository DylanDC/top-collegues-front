import { Pipe, PipeTransform } from '@angular/core';
import { Avis } from '../model';

@Pipe({
  name: 'lastAvis'
})
export class LastAvisPipe implements PipeTransform {

  transform(value: any): any {
    if (value === "J'ai aimé ")
      return `<span class="text-success"><h4>+${value}<h4></span>`;
    else if (value === "j'ai detesté")
      return `<span class="text-danger"><h4>${value}<h4></span>`;

  }
}


