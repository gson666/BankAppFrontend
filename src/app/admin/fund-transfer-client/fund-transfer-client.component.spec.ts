import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferClientComponent } from './fund-transfer-client.component';

describe('FundTransferClientComponent', () => {
  let component: FundTransferClientComponent;
  let fixture: ComponentFixture<FundTransferClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundTransferClientComponent]
    });
    fixture = TestBed.createComponent(FundTransferClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
