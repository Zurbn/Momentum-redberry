import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumUploadComponentComponent } from './momentum-upload-component.component';

describe('MomentumUploadComponentComponent', () => {
  let component: MomentumUploadComponentComponent;
  let fixture: ComponentFixture<MomentumUploadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumUploadComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumUploadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
