import { Tasks } from './tasks.types';

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
