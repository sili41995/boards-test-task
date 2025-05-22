import GeneralContainer from '@/components/GeneralContainer';
import Section from '@/components/Section';
import { FC } from 'react';
import SignUp from '@/components/SignUp';

const SignUpPage: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <SignUp />
      </GeneralContainer>
    </Section>
  );
};

export default SignUpPage;
