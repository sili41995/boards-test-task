import { FC } from 'react';
import Section from '@/components/Section';
import GeneralContainer from '@/components/GeneralContainer';
import NotFound from '@/components/NotFound';

const NotFoundPage: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <NotFound />
      </GeneralContainer>
    </Section>
  );
};

export default NotFoundPage;
