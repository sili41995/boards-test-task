import { FC } from 'react';
import SignUpForm from '@/components/SignUpForm';
import { Messages, PagePaths } from '@/constants';
import PageTitle from '@/components/PageTitle';
import AuthFormMessage from '@/components/AuthFormMessage';
import { PageTitles } from '@/constants';

const SignUp: FC = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
      <PageTitle title={PageTitles.signUp} />
      <SignUpForm />
      <AuthFormMessage
        pageTitle={PageTitles.signIn}
        pageLink={PagePaths.signIn}
        message={Messages.ifAccountAbsent}
      />
    </div>
  );
};

export default SignUp;
