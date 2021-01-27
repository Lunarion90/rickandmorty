import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], nameSearch: string): any[] {
    if (!items) {
      return [];
    }
    if (!nameSearch) {
      return items;
    }

    return items.filter(singleItem => {
      if (nameSearch && singleItem.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
        return false;
      }
      return true; 
    });
  }
}