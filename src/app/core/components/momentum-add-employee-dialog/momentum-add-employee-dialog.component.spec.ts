import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumAddEmployeeDialogComponent } from './momentum-add-employee-dialog.component';

describe('MomentumAddEmployeeDialogComponent', () => {
  let component: MomentumAddEmployeeDialogComponent;
  let fixture: ComponentFixture<MomentumAddEmployeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumAddEmployeeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumAddEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
