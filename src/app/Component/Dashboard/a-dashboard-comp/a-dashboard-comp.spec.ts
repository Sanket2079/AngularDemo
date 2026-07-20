import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADashboardComp } from './a-dashboard-comp';

describe('ADashboardComp', () => {
  let component: ADashboardComp;
  let fixture: ComponentFixture<ADashboardComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADashboardComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ADashboardComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
