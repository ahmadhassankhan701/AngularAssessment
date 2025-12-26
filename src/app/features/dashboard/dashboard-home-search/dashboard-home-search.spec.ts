import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeSearch } from './dashboard-home-search';

describe('DashboardHomeSearch', () => {
  let component: DashboardHomeSearch;
  let fixture: ComponentFixture<DashboardHomeSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHomeSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHomeSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
