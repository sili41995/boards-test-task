import GeneralContainer from '@/components/GeneralContainer';
import Loader from '@/components/Loader';
import PageContent from '@/components/PageContent';
import Section from '@/components/Section';
import { FC, Suspense, useEffect, useState, useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import BoardDetails from '@/components/BoardDetails';
import { useDynamicParam } from '@/hooks';
import { BoardAction, IAddTaskPageContext, IBoard } from '@/types/boards.types';
import boardsService from '@/services/boards.service';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';
import { ITask } from '@/types/tasks.types';

const boardReducer = (
  state: IBoard | null,
  action: BoardAction
): IBoard | null => {
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

const BoardDetailsPage: FC = () => {
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

  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <Suspense fallback={<Loader />}>
            <Outlet context={addTaskPageContext} />
          </Suspense>
          {board && <BoardDetails board={board} />}
          {isLoading && <Loader />}
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default BoardDetailsPage;
