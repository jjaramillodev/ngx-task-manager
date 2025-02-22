import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'any',
})
export class FormTaskError {
  errorControlTitle(control: FormControl<string>): string {
    if (control.hasError('required')) return 'El título es requerido';
    if (control.hasError('minlength'))
      return `El título debe ser mayor a ${control.errors?.['minlength']?.requiredLength} caracteres`;
    return control.hasError('maxlength')
      ? `El título no debe exceder los ${control.errors?.['maxlength']?.requiredLength} caracteres`
      : '';
  }

  errorControlExpirationDate(control: FormControl<string | null>): string {
    return control.hasError('pattern')
      ? 'La fecha de vencimiento no es válida'
      : '';
  }
}
