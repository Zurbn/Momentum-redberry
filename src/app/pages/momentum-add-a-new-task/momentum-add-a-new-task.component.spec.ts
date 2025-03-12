import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumAddANewTaskComponent } from './momentum-add-a-new-task.component';

describe('MomentumAddANewTaskComponent', () => {
  let component: MomentumAddANewTaskComponent;
  let fixture: ComponentFixture<MomentumAddANewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumAddANewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumAddANewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
