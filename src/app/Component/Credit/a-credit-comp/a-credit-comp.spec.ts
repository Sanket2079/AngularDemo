import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACreditComp } from './a-credit-comp';

describe('ACreditComp', () => {
  let component: ACreditComp;
  let fixture: ComponentFixture<ACreditComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACreditComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ACreditComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
