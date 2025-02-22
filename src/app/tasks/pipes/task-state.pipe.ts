import { Pipe, PipeTransform } from '@angular/core';
import { TaskStateT } from '@tasks/interfaces/task.interface';

@Pipe({
  name: 'taskState',
  standalone: true,
})
export class TaskStatePipe implements PipeTransform {
  transform(state?: TaskStateT): string {
    if (!state) return '';
    if (state === 'pending') return 'Pendiente';
    if (state === 'progress') return 'En progreso';
    if (state === 'complete') return 'Completada';
    return state === 'late' ? 'Atrasada' : '';
  }
}
