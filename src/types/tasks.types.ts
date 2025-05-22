export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface ITask {
  id: number;
  title: string;
  desc: string;
  status: TaskStatus;
  boardId: number;
}

export type Tasks = ITask[];

export type NewTask = Pick<ITask, 'desc' | 'status' | 'title' | 'boardId'>;

export type NewTaskWithoutBoardId = Omit<NewTask, 'boardId'>;

export interface ITaskStatus {
  title: string;
  status: TaskStatus;
}

export type TaskStatuses = ITaskStatus[];
