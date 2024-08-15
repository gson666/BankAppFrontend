import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawClientComponent } from './withdraw-client.component';

describe('WithdrawClientComponent', () => {
  let component: WithdrawClientComponent;
  let fixture: ComponentFixture<WithdrawClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawClientComponent]
    });
    fixture = TestBed.createComponent(WithdrawClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
