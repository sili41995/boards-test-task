import GeneralContainer from '@/components/GeneralContainer';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const BoardDetailsPage: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <p>BoardDetailsPage</p>
      </GeneralContainer>
    </Section>
  );
};

export default BoardDetailsPage;
