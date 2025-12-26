import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopBar } from './dashboard-top-bar';

describe('DashboardTopBar', () => {
  let component: DashboardTopBar;
  let fixture: ComponentFixture<DashboardTopBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTopBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTopBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
