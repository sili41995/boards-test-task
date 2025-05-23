import { FC } from 'react';
import SignInForm from '@/components/SignInForm';
import { Messages, PagePaths } from '@/constants';
import PageTitle from '@/components/PageTitle';
import AuthFormMessage from '@/components/AuthFormMessage';
import { PageTitles } from '@/constants';

const SignIn: FC = () => {
  return (
    <div className='flex items-center flex-col gap-5'>
      <PageTitle title={PageTitles.signIn} />
      <SignInForm />
      <AuthFormMessage
        pageTitle={PageTitles.signUp}
        pageLink={PagePaths.signUp}
        message={Messages.ifAccountExist}
      />
    </div>
  );
};

export default SignIn;
