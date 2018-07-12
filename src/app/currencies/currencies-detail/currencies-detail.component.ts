import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Currency} from '../model/currencies.model';
import {CurrenciesService} from '../services/currencies.service';

@Component({
  selector: 'app-currencies-detail',
  templateUrl: './currencies-detail.component.html',
  styleUrls: ['./currencies-detail.component.css']
})
export class CurrenciesDetailComponent implements OnInit {

  currency: Currency;

  constructor(private currencyService: CurrenciesService
    , private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.params.subscribe(res => {
      this.currencyService.getCurrency(res.id).subscribe((data: any) => this.currency = data.data
      );
    });
  }

  ngOnInit() {
  }

  public isCurrencyAvailable() {
    if (this.currency) return true;
  }

  public backToCurrencies() {
    this.route.navigate(['']);
  }
}
