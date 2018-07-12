import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrenciesDetailComponent} from './currencies-detail.component';

describe('CurrenciesDetailComponent', () => {
  let component: CurrenciesDetailComponent;
  let fixture: ComponentFixture<CurrenciesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrenciesDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
