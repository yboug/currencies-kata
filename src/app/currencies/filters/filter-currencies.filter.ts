import {Pipe, PipeTransform} from '@angular/core';
import {Currency} from '../model/currencies.model';

@Pipe({
  name: 'currenciesFilter'
})
export class FilterPipe implements PipeTransform {
  transform(currencies: any[], searchText: string, attribute: string): any[] {
    if (!currencies) {
      return [];
    }
    if (!searchText) {
      return currencies;
    }
    searchText = searchText.toLowerCase();
    return currencies.filter((cur: Currency) => {
      if (attribute === 'id') {
        return cur.id.toLowerCase().includes(searchText);
      }
      if (attribute === 'code') {
        return cur.attributes.code.toLowerCase().includes(searchText);
      }
      if (attribute === 'name') {
        return cur.attributes.name.toLowerCase().includes(searchText);
      }
      if (attribute === 'type') {
        return cur.attributes.currency_type.toLowerCase().includes(searchText);
      }
    });
  }
}
