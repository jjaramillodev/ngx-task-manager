import { Component } from '@angular/core';
import { ContainerComponent } from '../shared/components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FormTaskComponent } from './fixtures/form-task/form-task.component';
import { ListTaskComponent } from './fixtures/list-task/list-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderComponent,
    FormTaskComponent,
    ListTaskComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {}
