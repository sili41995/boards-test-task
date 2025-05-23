import { CheckboxGroupProps } from 'antd/es/checkbox';
import { BaseType } from 'antd/es/typography/Base';
import { Titles } from '@/constants';

export type TaskStatus = 'todo' | 'in_progress' | 'done' | '';

export interface ITask {
  id: number;
  title: string;
  desc?: string;
  status: TaskStatus;
  boardId: number;
}

export type Tasks = ITask[];

export type TaskId = Pick<ITask, 'id'>;

export type NewTask = Pick<ITask, 'desc' | 'status' | 'title' | 'boardId'>;

export type NewTaskWithoutBoardId = Omit<NewTask, 'boardId'>;

export interface ITaskStatus {
  title: Titles;
  status: TaskStatus;
}

export type TaskStatuses = ITaskStatus[];

export type TaskBaseType = BaseType | undefined;

export type SetTask = (data: ITask) => void;

export type DeleteTask = (id: number) => Promise<void>;

export interface IUpdateTaskProps {
  data: NewTaskWithoutBoardId;
  id: number;
}

export type TaskStatusesFilters = CheckboxGroupProps<TaskStatus>['options'];

export interface IFilterTasksByStatusProps {
  status: string;
  tasks: Tasks;
}

export type TasksOrNull = Tasks | null;

export type TaskOrNull = ITask | null;

export type SetNewTaskWithoutBoardId = (data: NewTaskWithoutBoardId) => void;
