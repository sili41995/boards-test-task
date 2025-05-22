import { FC, Suspense, useEffect, useState } from 'react';
import Section from '@/components/Section';
import GeneralContainer from '@/components/GeneralContainer';
import Loader from '@/components/Loader';
import { Outlet } from 'react-router-dom';
import PageContent from '@/components/PageContent';
import { Boards, IAddBoardPageContext, IBoard } from '@/types/boards.types';
import PageTitle from '@/components/PageTitle';
import { PageTitles } from '@/constants';
import BoardsListContainer from '@/components/BoardsListContainer';
import { AxiosError } from 'axios';
import boardsService from '@/services/boards.service';
import { toasts } from '@/utils';

const BoardsPage: FC = () => {
  const [boards, setBoards] = useState<Boards | null>(null);
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

  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <PageTitle title={PageTitles.boards} />
          <Suspense fallback={<Loader />}>
            <Outlet context={addBoardPageContext} />
          </Suspense>
          {boards && <BoardsListContainer boards={boards} />}
          {isLoading && <Loader />}
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default BoardsPage;
