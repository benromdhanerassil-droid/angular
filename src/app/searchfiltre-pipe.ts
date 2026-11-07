import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfiltre',
})
export class SearchfiltrePipe implements PipeTransform {
  transform(list: any[], filterText: string): any[] {
    if (!list) return [];
    if (!filterText) return list;
    return list.filter(item =>
      item.marque.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}