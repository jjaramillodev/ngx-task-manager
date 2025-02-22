import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-state',
  standalone: true,
  imports: [],
  templateUrl: './button-state.component.html',
  styleUrl: './button-state.component.scss',
})
export class ButtonStateComponent {
  @Output() nextState = new EventEmitter<void>();

  onClick(): void {
    this.nextState.emit();
  }
}
