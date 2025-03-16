import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/core/models/department.enum';
import { Priority } from 'src/app/core/models/priority.enum';
import { Status } from 'src/app/core/models/status.enum';

@Component({
  selector: 'app-momentum-add-a-new-task',
  templateUrl: './momentum-add-a-new-task.component.html',
  styleUrls: ['./momentum-add-a-new-task.component.scss'],
})
export class MomentumAddANewTaskComponent {
  public addATaskForm: FormGroup;

  public priorities = Priority;

  public statuses = Status;

  public departments = Department;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }
  get tomorrow(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  ngOnInit(): void {}

  private initializeForm() {
    this.addATaskForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      description: ['', [Validators.minLength(3), Validators.maxLength(255)]],
      priority: [Priority.MIDDLE, [Validators.required]],
      status: [Status.TODO, Validators.required],
      department: ['', Validators.required],
      assignedTo: ['', Validators.required],
      dueDate: [this.tomorrow, Validators.required],
    });

    this.addATaskForm.valueChanges.subscribe((x) => {
      console.log(this.addATaskForm);
    });
  }
}
