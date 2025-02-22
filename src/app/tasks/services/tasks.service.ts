import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TaskI } from '@tasks/interfaces/task.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly _http = inject(HttpClient);

  private readonly _apiUrl = environment.apiTasks.url;

  createTask(task: Partial<TaskI>): Observable<TaskI> {
    return this._http.post<TaskI>(`${this._apiUrl}/tasks`, task);
  }
}
