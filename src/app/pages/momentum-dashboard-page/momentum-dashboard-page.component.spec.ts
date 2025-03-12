import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumDashboardPageComponent } from './momentum-dashboard-page.component';

describe('MomentumDashboardPageComponent', () => {
  let component: MomentumDashboardPageComponent;
  let fixture: ComponentFixture<MomentumDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
