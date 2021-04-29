import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchproductsComponent } from './dispatchproducts.component';

describe('DispatchproductsComponent', () => {
  let component: DispatchproductsComponent;
  let fixture: ComponentFixture<DispatchproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});