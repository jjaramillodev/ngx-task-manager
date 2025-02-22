import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CardTaskComponent } from '@tasks/components/card-task/card-task.component';
import { TaskI } from '@tasks/interfaces/task.interface';
import { TasksService } from '@tasks/services/tasks.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CardTaskComponent],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss',
})
export class ListTaskComponent implements OnInit, OnDestroy {
  private readonly _tasksService = inject(TasksService);
  private readonly _onDestroy$ = new Subject<void>();
  private readonly _toastService = inject(ToastService);

  readonly tasks = signal<TaskI[]>([]);

  ngOnInit() {
    this._getTasks();
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  // -------------------------- onInit --------------------------

  private _getTasks(): void {
    this._tasksService
      .getTasks()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((res) => {
        this.tasks.set(res.tasks);
      });
  }

  // -------------------------- methods --------------------------

  nextState(id: number): void {
    this._tasksService
      .nextState(id)
      .pipe(
        switchMap(() => this._tasksService.getTasks()),
        takeUntil(this._onDestroy$)
      )
      .subscribe({
        next: (res) => {
          this.tasks.set(res.tasks);
          this._toastService.success('Tarea actualizada correctamente');
        },
        error: () => {
          this._toastService.error('Error al actualizar la tarea');
        },
      });
  }
}
