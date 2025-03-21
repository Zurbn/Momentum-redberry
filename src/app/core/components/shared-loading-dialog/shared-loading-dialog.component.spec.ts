import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLoadingDialogComponent } from './shared-loading-dialog.component';

describe('SharedLoadingDialogComponent', () => {
  let component: SharedLoadingDialogComponent;
  let fixture: ComponentFixture<SharedLoadingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLoadingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLoadingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
