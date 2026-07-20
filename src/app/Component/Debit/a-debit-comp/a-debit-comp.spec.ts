import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADebitComp } from './a-debit-comp';

describe('ADebitComp', () => {
  let component: ADebitComp;
  let fixture: ComponentFixture<ADebitComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADebitComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ADebitComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
