import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import {boardsService} from '@/services';
import { toasts } from '@/utils';
import {
  BoardsOrNull,
  IAddBoardPageContext,
  IBoard,
} from '@/types/boards.types';
import { IUseBoardsPage } from '@/types/hooks.types';

const useBoardsPage = (): IUseBoardsPage => {
  const [boards, setBoards] = useState<BoardsOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateBoards = (data: IBoard) => {
    setBoards((prevState) => prevState && [...prevState, data]);
  };

  const addBoardPageContext: IAddBoardPageContext = {
    updateBoards,
  };

  useEffect(() => {
    const getBoards = async () => {
      try {
        setIsLoading(true);

        const response = await boardsService.getAll();

        setBoards(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.message;

          toasts.errorToast(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getBoards();
  }, []);

  return { addBoardPageContext, boards, isLoading };
};

export default useBoardsPage;
