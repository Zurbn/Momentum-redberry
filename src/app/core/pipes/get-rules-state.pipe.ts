import { Pipe, type PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'getAppRulesState',
  standalone: true,
})
export class GetRulesStatePipe implements PipeTransform {
  transform(formControl: AbstractControl, formValue: any): string {
    const controlHasErrors = formControl.invalid && !formControl.pristine;

    const controlWasTouchedAndValueIsValid =
      formControl.valid && !formControl.pristine;

    const colorStyle = controlHasErrors
      ? 'add-a-task__rule add-a-task__rule--invalid'
      : controlWasTouchedAndValueIsValid
      ? 'add-a-task__rule add-a-task__rule--success'
      : 'add-a-task__rule';

    return colorStyle;
  }
}
