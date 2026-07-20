import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanComp } from './loan-comp';

describe('LoanComp', () => {
  let component: LoanComp;
  let fixture: ComponentFixture<LoanComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanComp],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
