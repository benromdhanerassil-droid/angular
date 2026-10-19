import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfiltre',
})
export class SearchfiltrePipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    console.log("Transforming...");
    return list ? list.filter(item =>
      item.marque.toLowerCase().includes(filterText)) : [];
  }
}