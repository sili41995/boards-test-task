import { FC } from 'react';
import { PagePaths } from '@/constants';
import { selectSignOut } from '@/store/auth/selectors';
import { useAuthStore } from '@/store/store';
import { BtnClickEvent } from '@/types/general.types';
import { makeBlur, toasts } from '@/utils';
import { useNavigate } from 'react-router-dom';

const SignOutBtn: FC = () => {
  const signOut = useAuthStore(selectSignOut);
  const navigate = useNavigate();

  const signOutProfile = () => {
    signOut()
      .then(() => {
        navigate(PagePaths.root);
      })
      .catch((error) => {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }
      });
  };

  const onSignOutBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    signOutProfile();
  };

  return (
    <button
      className='block h-full min-w-[100px] px-3 py-3 bg-[#ff9192] rounded-md border-none text-white text-center font-sans text-base font-medium transition-colors duration-400  hover:bg-[#d3232f] focus:bg-white'
      type='button'
      onClick={onSignOutBtnClick}
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
