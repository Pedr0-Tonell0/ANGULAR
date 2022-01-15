import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const idValidator : ValidatorFn = (control: AbstractControl): ValidationErrors|null => {
  const value = control.value ? control.value as string : '';
  const isValid = value.toLocaleLowerCase().startsWith('id');

  return !isValid ? {idInvalid: {value: value}} : null;
}

export {idValidator}
