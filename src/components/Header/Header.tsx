import { FC } from 'react';
import Navigation from '@/components/Navigation';
import { navLinks } from '@/constants';
import GeneralContainer from '@/components/GeneralContainer';

const Header: FC = () => {
  return (
    <header className='py-4 bg-[#38b6ff]'>
      <GeneralContainer>
        <Navigation navLinks={navLinks} />
      </GeneralContainer>
    </header>
  );
};

export default Header;
