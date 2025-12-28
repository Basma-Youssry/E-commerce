import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], term: string): any[] {
    return value.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
