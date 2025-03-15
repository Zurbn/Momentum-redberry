import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumTaskCardComponent } from './momentum-task-card.component';

describe('MomentumTaskCardComponent', () => {
  let component: MomentumTaskCardComponent;
  let fixture: ComponentFixture<MomentumTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumTaskCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
