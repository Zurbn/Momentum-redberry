import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumTaskColumnComponent } from './momentum-task-column.component';

describe('MomentumTaskColumnComponent', () => {
  let component: MomentumTaskColumnComponent;
  let fixture: ComponentFixture<MomentumTaskColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumTaskColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumTaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
