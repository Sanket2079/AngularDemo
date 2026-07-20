import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStatementComp } from './a-statement-comp';

describe('AStatementComp', () => {
  let component: AStatementComp;
  let fixture: ComponentFixture<AStatementComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AStatementComp],
    }).compileComponents();

    fixture = TestBed.createComponent(AStatementComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
