import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumDetailsPageComponent } from './momentum-details-page.component';

describe('MomentumDetailsPageComponent', () => {
  let component: MomentumDetailsPageComponent;
  let fixture: ComponentFixture<MomentumDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
