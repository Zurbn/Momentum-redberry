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
      ? 'state--invalid'
      : controlWasTouchedAndValueIsValid
      ? 'state--success'
      : 'state--basic';

    return colorStyle;
  }
}
