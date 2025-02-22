import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskI } from '@tasks/interfaces/task.interface';
import { TasksService } from '@tasks/services/tasks.service';
import { Subject, takeUntil } from 'rxjs';
import { FormFieldModule } from 'src/app/shared/components/form-field/form-field.module';
import { ToastService } from 'src/app/shared/services/toast.service';
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
export class FormTaskComponent implements OnDestroy {
  private readonly _formTaskInit = inject(FormTaskInit);
  private readonly _formTaskError = inject(FormTaskError);
  private readonly _toastService = inject(ToastService);
  private readonly _tasksService = inject(TasksService);

  private readonly _onDestroy$ = new Subject<void>();
  readonly isLoading = signal<boolean>(false);

  formTask!: FormGroup<FormTaskI>;

  constructor() {
    this.initAllForms();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  // ---------------------------- constructor ----------------------------

  private initAllForms(): void {
    this.formTask = this._formTaskInit.groupFormTask();
  }

  // ---------------------------- methods ----------------------------

  sendForm(): void {
    // validar si el formulario es inválido
    const invalid = this._isFormInvalid();
    // si es inválido, marcar todos los campos como tocados y mostrar un toast
    if (invalid) {
      this._markAllAsTouched();
      this._toastService.warning(
        'Se marcaron los campos inválidos, por favor revisa.'
      );
      return;
    }
    // obtener el valor del formulario
    const task = this.formTask.getRawValue();
    // enviar el formulario
    this.createTask(task);
  }

  private createTask(task: Partial<TaskI>): void {
    // si está cargando, no hacer nada
    if (this.isLoading()) return;
    // marcar como cargando
    this.isLoading.set(true);
    // crear la tarea
    this._tasksService
      .createTask(task)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe({
        next: () => {
          this._toastService.success('Tarea creada correctamente.');
          this._resetForm();
          this.isLoading.set(false);
        },
        error: () => {
          this._toastService.error('Ocurrió un error al crear la tarea.');
          this.isLoading.set(false);
        },
      });
  }

  // ---------------------------- getters ----------------------------

  get ctrlsFormTask(): FormTaskI {
    return this.formTask.controls;
  }

  // ---------------------------- helpers ----------------------------

  private _isFormInvalid(): boolean {
    return this.formTask.invalid;
  }

  private _resetForm(): void {
    this.formTask.reset();
  }

  private _markAllAsTouched(): void {
    this.formTask.markAllAsTouched();
  }

  errorControlTitle(): string {
    return this._formTaskError.errorControlTitle(this.ctrlsFormTask.title);
  }

  errorControlExpirationDate(): string {
    return this._formTaskError.errorControlExpirationDate(
      this.ctrlsFormTask.expiration_date
    );
  }
}
