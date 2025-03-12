import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumHeaderComponent } from './momentum-header.component';

describe('MomentumHeaderComponent', () => {
  let component: MomentumHeaderComponent;
  let fixture: ComponentFixture<MomentumHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
