import { Component, EventEmitter, input, Output } from '@angular/core';
import { TaskI } from '@tasks/interfaces/task.interface';
import { BadgeStateComponent } from './badge-state/badge-state.component';
import { ButtonStateComponent } from './button-state/button-state.component';
import { ExpirationStateComponent } from './expiration-state/expiration-state.component';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [
    BadgeStateComponent,
    ButtonStateComponent,
    ExpirationStateComponent,
  ],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss',
})
export class CardTaskComponent {
  task = input.required<TaskI>();
  @Output() nextState = new EventEmitter<void>();

  get viewNextButton(): boolean {
    return this.task().state_id < 3;
  }
}
