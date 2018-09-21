import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (!value) {
      return []
    }
    if (!searchText) {

      return value
    }

    if (value && searchText) {
      searchText = searchText.toLowerCase()
    }

    return value.filter(collegue => {
      return collegue.name.toLowerCase().includes(searchText)
    })
  }


}


