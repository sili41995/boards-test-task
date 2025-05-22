import GeneralContainer from '@/components/GeneralContainer';
import Loader from '@/components/Loader';
import PageContent from '@/components/PageContent';
import Section from '@/components/Section';
import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const BoardDetailsPage: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <p>BoardDetailsPage</p>
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default BoardDetailsPage;
