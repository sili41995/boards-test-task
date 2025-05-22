import { FC, Suspense, useState } from 'react';
import Section from '@/components/Section';
import GeneralContainer from '@/components/GeneralContainer';
import Loader from '@/components/Loader';
import { Outlet } from 'react-router-dom';
import PageContent from '@/components/PageContent';
import { Boards, IAddBoardPageContext, IBoard } from '@/types/boards.types';

const BoardsPage: FC = () => {
  const [boards, setBoards] = useState<Boards>([]);

  const updateBoards = (data: IBoard) => {
    setBoards((prevState) => [...prevState, data]);
  };

  const addBoardPageContext: IAddBoardPageContext = {
    updateBoards,
  };

  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <Suspense fallback={<Loader />}>
            <Outlet context={addBoardPageContext} />
          </Suspense>
          <div>BoardsPage</div>
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default BoardsPage;
