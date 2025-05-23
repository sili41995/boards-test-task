import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import GeneralContainer from '@/components/GeneralContainer';
import Loader from '@/components/Loader';
import PageContent from '@/components/PageContent';
import Section from '@/components/Section';
import BoardDetails from '@/components/BoardDetails';
import { useBoardDetailsPage } from '@/hooks';

const BoardDetailsPage: FC = () => {
  const { addTaskPageContext, board, isLoading } = useBoardDetailsPage();

  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <Suspense fallback={<Loader />}>
            <Outlet context={addTaskPageContext} />
          </Suspense>
          {board && <BoardDetails tasks={board.tasks} title={board.title} />}
          {isLoading && <Loader />}
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default BoardDetailsPage;
