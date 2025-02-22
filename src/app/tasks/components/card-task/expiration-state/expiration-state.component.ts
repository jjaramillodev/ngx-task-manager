import { DatePipe, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { TaskStateT } from '@tasks/interfaces/task.interface';

@Component({
  selector: 'app-expiration-state',
  standalone: true,
  imports: [NgClass, DatePipe],
  templateUrl: './expiration-state.component.html',
  styleUrl: './expiration-state.component.scss',
})
export class ExpirationStateComponent {
  expiration = input.required<string | null>();
  state = input<TaskStateT>();

  get stateLate(): boolean {
    if (!this.state()) return false;
    return this.state() === 'late';
  }
}
