import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALoanComp } from './a-loan-comp';

describe('ALoanComp', () => {
  let component: ALoanComp;
  let fixture: ComponentFixture<ALoanComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALoanComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ALoanComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
