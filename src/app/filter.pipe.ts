import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    return items ? items.filter(item => item.name.search(new RegExp(searchText, 'i')) > -1) : [];
  }
}
