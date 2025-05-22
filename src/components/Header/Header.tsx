import { FC } from 'react';
import Navigation from '@/components/Navigation';
import { navLinks } from '@/constants';
import GeneralContainer from '@/components/GeneralContainer';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn } from '@/store/auth/selectors';
import AuthUserControls from '@/components/AuthUserControls';

const Header: FC = () => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);

  return (
    <header className='py-4 bg-[#38b6ff]'>
      <GeneralContainer>
        <div className='flex justify-between'>
          <Navigation navLinks={navLinks.privateNavLinks} />
          {isLoggedIn ? (
            <AuthUserControls />
          ) : (
            <Navigation navLinks={navLinks.authNavLinks} />
          )}
        </div>
      </GeneralContainer>
    </header>
  );
};

export default Header;
