import { FC } from 'react';
import SignInForm from '@/components/SignInForm';
import { PagePaths } from '@/constants';
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
        message='if you have an account'
      />
    </div>
  );
};

export default SignIn;
