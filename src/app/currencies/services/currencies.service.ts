import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CurrenciesService {

  // serviceUrl = 'assets/mock/currencies.json';
  serviceUrl = 'https://api.openfintech.io/v1/';

  constructor(private http: HttpClient) {
  }

  getCurrencies(pageNumber: number, pageSize: number) {
    return this.http.get(this.serviceUrl.concat('currencies?page[number]=' + pageNumber + '&page[size]=' + pageSize));
  }

  getCurrency(id: number) {
    return this.http.get(this.serviceUrl.concat('currencies/' + id));
  }
}
