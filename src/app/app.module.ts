import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CurrenciesComponent} from './currencies/currencies.component';
import {HttpClientModule} from '@angular/common/http';
import {CurrenciesService} from './currencies/services/currencies.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {CurrenciesDetailComponent} from './currencies/currencies-detail/currencies-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './currencies/filters/filter-currencies.filter';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrenciesDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    CurrenciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
