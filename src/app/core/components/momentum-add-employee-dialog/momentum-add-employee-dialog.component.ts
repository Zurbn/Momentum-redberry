import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddATaskFormData } from '../../models/add-a-task-form-data.model';
import { MomentumStoreFacade } from 'src/stores/momentum-store/facade';
import { filter, take, map } from 'rxjs';
import { LoadingState } from '../../models/loading-state.model';
import { EmployeeCreateRequest } from 'src/api/models/employee/requests/employee-create-request.model';
import { Department } from 'src/api/models/department/responses/department.model';

@Component({
  selector: 'app-momentum-add-employee-dialog',
  templateUrl: './momentum-add-employee-dialog.component.html',
  styleUrls: ['./momentum-add-employee-dialog.component.scss'],
})
export class MomentumAddEmployeeDialogComponent {
  public employeeForm: FormGroup;
  public formValue: EmployeeCreateRequest;
  errorRetrievingDepartments;
  public departments: Department[];

  public readonly VALIDATION_RULES = [
    'მინიმუმ 2 სიმბოლო',
    'მაქსიმუმ 256 სიმბოლო',
    'მხოლოდ ლათინური ან ქართული ასოები',
  ];

  constructor(
    public dialogRef: MatDialogRef<MomentumAddEmployeeDialogComponent>,
    private fb: FormBuilder,
    private momentumStoreFacade: MomentumStoreFacade
  ) {}

  public get avatarFormControl(): FormControl {
    return this.employeeForm.get('avatar') as FormControl;
  }

  ngOnInit(): void {
    this.retrieveDepartments();
  }

  private retrieveDepartments() {
    this.momentumStoreFacade
      .retrieveDepartments()
      .pipe(
        filter((departmentsState) => {
          if (departmentsState.loadingState === LoadingState.ERROR) {
            this.errorRetrievingDepartments = true;
          }
          return departmentsState.loadingState === LoadingState.LOADED;
        }),
        take(1),
        map((departmentsState) => departmentsState.departments)
      )
      .subscribe((departments) => {
        this.departments = departments;
        this.initializeForm();
      });
  }

  private initializeForm() {
    const NAME_PATTERN = /^[a-zA-Z\u10A0-\u10FF]+(?: [a-zA-Z\u10A0-\u10FF]+)*$/;

    this.employeeForm = this.fb.group({
      name: [
        this.formValue?.name || '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
          Validators.pattern(NAME_PATTERN),
        ],
      ],
      surname: [
        this.formValue?.surname || '',
        [
          Validators.minLength(2),
          Validators.maxLength(255),
          Validators.pattern(NAME_PATTERN),
        ],
      ],
      avatar: ['', Validators.required],
      department_id: [this.formValue?.department_id, Validators.required],
    });

    this.employeeForm.valueChanges.subscribe((formValue) => {
      this.formValue = formValue;
    });
  }

  public closeDialog(): void {
    this.dialogRef.close(false);
  }

  public confirmAction(): void {
    this.dialogRef.close(true);
  }

  public addEmployee() {
    this.momentumStoreFacade
      .registerEmployee({
        avatar: this.formValue.avatar,
        department_id: this.formValue.department_id,
        name: this.formValue.name,
        surname: this.formValue.surname,
      })
      .pipe(take(1))
      .subscribe((employee) => {
        console.log(employee);
        this.closeDialog();
      });
  }
}
