import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Section from '@/components/Section';
import GeneralContainer from '@/components/GeneralContainer';
import Loader from '@/components/Loader';
import PageContent from '@/components/PageContent';
import PageTitle from '@/components/PageTitle';
import { PageTitles } from '@/constants';
import BoardsListContainer from '@/components/BoardsListContainer';
import { useBoardsPage } from '@/hooks';

const BoardsPage: FC = () => {
  const { addBoardPageContext, boards, isLoading } = useBoardsPage();

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
