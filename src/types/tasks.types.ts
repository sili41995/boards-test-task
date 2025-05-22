export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface ITask {
  id: number;
  title: string;
  desc: string;
  status: TaskStatus;
}

export type Tasks = ITask[];
