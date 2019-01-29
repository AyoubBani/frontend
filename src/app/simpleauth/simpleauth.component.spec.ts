import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleauthComponent } from './simpleauth.component';

describe('SimpleauthComponent', () => {
  let component: SimpleauthComponent;
  let fixture: ComponentFixture<SimpleauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
