import {Component, OnInit} from '@angular/core';
import {Currency} from './model/currencies.model';
import {CurrenciesService} from './services/currencies.service';

@Component({
  selector: 'app-currencies-table',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: Currency [];
  pageNumber = 1;
  pageSize = 10;
  totalItems = 0;
  firstPage = 1;
  searchText = '';
  filterAttribute = 'code';

  constructor(private currencyService: CurrenciesService) {
  }

  ngOnInit() {
    this.getPage(this.firstPage);
  }

  getPage(page: number) {
    this.currencyService.getCurrencies(page, this.pageSize)
      .subscribe(
        (data: any) => {
          this.currencies = data.data,
            this.totalItems = data.meta.total,
            this.pageNumber = page;
        },
        (error) => console.log(error)
      );
  }

  pageChanged(event) {
    this.getPage(event);
  }

  setPageSize(size: number) {
    this.pageSize = size;
    this.getPage(this.firstPage);
  }

}
