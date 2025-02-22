export interface TaskStateI {
  title: string;
  description: string;
}

export interface TaskI {
  id: number;
  title: string;
  expiration_date: string | null;
  state_id: number;
  state?: TaskStateI;
}
