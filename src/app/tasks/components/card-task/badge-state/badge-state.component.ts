import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { TaskStateT } from '@tasks/interfaces/task.interface';
import { TaskStatePipe } from '@tasks/pipes/task-state.pipe';

@Component({
  selector: 'app-badge-state',
  standalone: true,
  imports: [NgClass, TaskStatePipe],
  templateUrl: './badge-state.component.html',
  styleUrl: './badge-state.component.scss',
})
export class BadgeStateComponent {
  state = input<TaskStateT>();

  get badgeClass(): string {
    const s = this.state();
    if (s === 'pending') return 'badge--pending';
    if (s === 'progress') return 'badge--progress';
    if (s === 'complete') return 'badge--complete';
    return s === 'late' ? 'badge--late' : '';
  }
}
