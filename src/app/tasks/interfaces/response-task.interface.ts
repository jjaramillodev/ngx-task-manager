import { TaskI } from './task.interface';

export interface ResponseTaskI {
  message: string;
  task: TaskI;
}

export interface ResponseTasksI {
  message: string;
  tasks: TaskI[];
}
