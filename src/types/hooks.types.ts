import { FormInstance } from 'antd';
import { SetURLSearchParams } from 'react-router-dom';
import {
  BoardOrNull,
  BoardsOrNull,
  IAddBoardPageContext,
  IAddTaskPageContext,
  NewBoard,
  SetNewBoard,
} from './boards.types';
import {
  NewTaskWithoutBoardId,
  SetNewTaskWithoutBoardId,
  SetTask,
  TaskOrNull,
  TasksOrNull,
} from './tasks.types';
import { OnBtnClickFunc } from './general.types';

export interface IUpdateSearchParamsProps {
  key: string;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: (data: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface IUseBoardDetailsPage {
  addTaskPageContext: IAddTaskPageContext;
  board: BoardOrNull;
  isLoading: boolean;
}

export interface IUseBoardsPage {
  addBoardPageContext: IAddBoardPageContext;
  boards: BoardsOrNull;
  isLoading: boolean;
}

export interface IUseTaskDetailsPage {
  task: TaskOrNull;
  updateTask: SetTask;
  onDelBtnClick: OnBtnClickFunc;
  isLoading: boolean;
}

export interface IUseTasksPage {
  tasks: TasksOrNull;
  isLoading: boolean;
}

export interface IUseAddBoardForm {
  form: FormInstance<NewBoard>;
  onFinish: SetNewBoard;
  isLoading: boolean;
}

export interface IUseAddTaskFormProps {
  boardId: number;
  addBoardTask: SetTask;
}

export interface IUseAddTaskForm {
  form: FormInstance<NewTaskWithoutBoardId>;
  onFinish: SetNewTaskWithoutBoardId;
  isLoading: boolean;
}
