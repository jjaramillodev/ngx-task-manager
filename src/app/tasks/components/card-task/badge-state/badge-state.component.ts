import { Component, input } from '@angular/core';
import { TaskStateT } from '@tasks/interfaces/task.interface';

@Component({
  selector: 'app-badge-state',
  standalone: true,
  imports: [],
  templateUrl: './badge-state.component.html',
  styleUrl: './badge-state.component.scss',
})
export class BadgeStateComponent {
  state = input<TaskStateT>();
}
