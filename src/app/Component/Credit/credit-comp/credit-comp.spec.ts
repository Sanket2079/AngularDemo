import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditComp } from './credit-comp';

describe('CreditComp', () => {
  let component: CreditComp;
  let fixture: ComponentFixture<CreditComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditComp],
    }).compileComponents();

    fixture = TestBed.createComponent(CreditComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
