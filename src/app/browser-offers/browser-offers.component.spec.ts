import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserOffersComponent } from './browser-offers.component';

describe('BrowserOffersComponent', () => {
  let component: BrowserOffersComponent;
  let fixture: ComponentFixture<BrowserOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
