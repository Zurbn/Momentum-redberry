import { Pipe, type PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { AddATaskFormData } from '../models/add-a-task-form-data.model';

@Pipe({
  name: 'appGetPriorityData',
  standalone: true,
})
export class GetPriorityDataPipe implements PipeTransform {
  transform(form: FormGroup, priorities: Priority[], formData: AddATaskFormData): Priority {
    const selectedPriorityId = form?.get('priority')?.value;
    return priorities?.find((priority) => priority?.id == selectedPriorityId);
  }
}
