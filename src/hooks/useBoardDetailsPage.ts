import { useEffect, useState, useReducer } from 'react';
import { AxiosError } from 'axios';
import { useDynamicParam } from '@/hooks';
import {
  BoardAction,
  IAddTaskPageContext,
  BoardOrNull,
} from '@/types/boards.types';
import {boardsService} from '@/services';
import { toasts } from '@/utils';
import { ITask } from '@/types/tasks.types';
import { IUseBoardDetailsPage } from '@/types/hooks.types';

const boardReducer = (state: BoardOrNull, action: BoardAction): BoardOrNull => {
  switch (action.type) {
    case 'addTask':
      return state
        ? { ...state, tasks: [...state.tasks, action.payload] }
        : null;

    case 'addBoard':
      return action.payload;

    default:
      return state;
  }
};

const useBoardDetailsPage = (): IUseBoardDetailsPage => {
  const [board, dispatch] = useReducer(boardReducer, null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const boardId = useDynamicParam();

  const addBoardTask = (data: ITask) => {
    dispatch({ type: 'addTask', payload: data });
  };

  const addTaskPageContext: IAddTaskPageContext = { addBoardTask };

  useEffect(() => {
    const getBoardById = async (id: number) => {
      try {
        setIsLoading(true);

        const response = await boardsService.getById(id);

        dispatch({ type: 'addBoard', payload: response });
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.message;

          toasts.errorToast(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getBoardById(boardId);
  }, [boardId]);

  return { addTaskPageContext, board, isLoading };
};

export default useBoardDetailsPage;
