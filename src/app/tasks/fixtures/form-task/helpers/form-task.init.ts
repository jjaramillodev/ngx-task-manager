import { inject, Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FormTaskI } from '../interfaces/form-task.interface';

@Injectable({
  providedIn: 'any',
})
export class FormTaskInit {
  private readonly _fb = inject(NonNullableFormBuilder);

  private readonly _dateValid: RegExp = /^\d{4}-\d{2}-\d{2}$/;

  groupFormTask(): FormGroup<FormTaskI> {
    return this._fb.group<FormTaskI>({
      title: this._fb.control<string>('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      expiration_date: this._fb.control<Date | null>(null, [
        Validators.pattern(this._dateValid),
      ]),
    });
  }
}
