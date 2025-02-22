export type TaskStateT = 'pending' | 'progress' | 'completed' | 'late';

export interface TaskStateI {
  title: TaskStateT;
  description: string;
}

export interface TaskI {
  id: number;
  title: string;
  expiration_date: string | null;
  state_id: number;
  state?: TaskStateI;
}
