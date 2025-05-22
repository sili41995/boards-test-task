import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IProps } from './Navigation.types';
import { AnchorClickEvent } from '@/types/general.types';
import { makeBlur } from '@/utils';

const Navigation: FC<IProps> = ({ navLinks }) => {
  const onLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <nav>
      <ul className='flex gap-5'>
        {navLinks.map(({ href, title }) => (
          <li key={href}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                [
                  'block min-w-[100px] px-3 py-3 rounded-md border border-white text-center font-sans text-base font-medium transition-colors duration-400 hover:text-[#38b6ff] hover:bg-white focus:text-[#38b6ff] focus:bg-white active:text-[#38b6ff]',
                  isActive
                    ? 'text-[#38b6ff] bg-white'
                    : 'text-white bg-transparent',
                ].join(' ')
              }
              onClick={onLinkClick}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
