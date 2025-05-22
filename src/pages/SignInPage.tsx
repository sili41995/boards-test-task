import GeneralContainer from '@/components/GeneralContainer';
import Section from '@/components/Section';
import { FC } from 'react';
import SignIn from '@/components/SignIn';

const SignInPage: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <SignIn />
      </GeneralContainer>
    </Section>
  );
};

export default SignInPage;
