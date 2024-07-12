import { Pipe, PipeTransform } from '@angular/core';
import { Yedis } from '../interfaces/yedis';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Yedis[], searchInput: string) {
    searchInput = searchInput ? searchInput.toLowerCase() : '';
    return searchInput ? value.filter(jedi => jedi.name.toLowerCase().includes(searchInput)) : value; 
  }

}
