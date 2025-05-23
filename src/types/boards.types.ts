import { ITask, SetTask, Tasks } from './tasks.types';

export interface IBoard {
  id: number;
  title: string;
  tasks: Tasks;
}

export type NewBoard = Pick<IBoard, 'title'>;

export type Boards = IBoard[];

export type SetBoards = (data: IBoard) => void;

export interface IAddBoardPageContext {
  updateBoards: SetBoards;
}

export interface IAddTaskPageContext {
  addBoardTask: SetTask;
}

export type BoardAction =
  | { type: 'addTask'; payload: ITask }
  | { type: 'addBoard'; payload: IBoard };

export type BoardOrNull = IBoard | null;

export type BoardsOrNull = Boards | null;

export type SetNewBoard = (data: NewBoard) => void;
