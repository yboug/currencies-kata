import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CurrenciesComponent} from '../currencies/currencies.component';
import {CurrenciesDetailComponent} from '../currencies/currencies-detail/currencies-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'currency/:id',
    component: CurrenciesDetailComponent,
  },
  {
    path: '',
    component: CurrenciesComponent,
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
