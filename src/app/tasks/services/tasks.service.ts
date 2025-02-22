import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ResponseTaskI,
  ResponseTasksI,
} from '@tasks/interfaces/response-task.interface';
import { TaskI } from '@tasks/interfaces/task.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly _http = inject(HttpClient);

  private readonly _apiUrl = environment.apiTasks.url;

  getTasks(): Observable<ResponseTasksI> {
    return this._http.get<ResponseTasksI>(`${this._apiUrl}/tasks`);
  }

  createTask(task: Partial<TaskI>): Observable<ResponseTaskI> {
    return this._http.post<ResponseTaskI>(`${this._apiUrl}/tasks`, task);
  }
}
