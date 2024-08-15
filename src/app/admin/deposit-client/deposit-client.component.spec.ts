import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositClientComponent } from './deposit-client.component';

describe('DepositClientComponent', () => {
  let component: DepositClientComponent;
  let fixture: ComponentFixture<DepositClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositClientComponent]
    });
    fixture = TestBed.createComponent(DepositClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
