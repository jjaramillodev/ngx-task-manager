import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from 'src/app/shared/components/form-field/form-field.module';
import { FormTaskError } from './helpers/form-task.error';
import { FormTaskInit } from './helpers/form-task.init';
import { FormTaskI } from './interfaces/form-task.interface';

@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.scss',
})
export class FormTaskComponent {
  private readonly _formTaskInit = inject(FormTaskInit);
  private readonly _formTaskError = inject(FormTaskError);

  formTask!: FormGroup<FormTaskI>;

  constructor() {
    this.initAllForms();
  }

  // ---------------------------- constructor ----------------------------

  private initAllForms(): void {
    this.formTask = this._formTaskInit.groupFormTask();
  }

  // ---------------------------- methods ----------------------------

  sendForm(): void {}

  // ---------------------------- getters ----------------------------

  get ctrlsFormTask(): FormTaskI {
    return this.formTask.controls;
  }

  // ---------------------------- helpers ----------------------------

  errorControlTitle(): string {
    return this._formTaskError.errorControlTitle(this.ctrlsFormTask.title);
  }

  errorControlExpirationDate(): string {
    return this._formTaskError.errorControlExpirationDate(
      this.ctrlsFormTask.expiration_date
    );
  }
}
