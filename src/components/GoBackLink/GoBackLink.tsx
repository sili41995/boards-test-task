import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PagePaths, Titles } from '@/constants';
import { ILocation } from '@/types/general.types';
import { IProps } from './GoBackLink.types';

const GoBackLink: FC<IProps> = ({ title = Titles.goBack }) => {
  const { state }: ILocation = useLocation();
  const goBackPath = state?.from ? state.from : PagePaths.boards;

  return (
    <Link
      to={goBackPath}
      className='self-start inline-block h-full min-w-[200px] px-3 py-3 bg-[#808080] rounded-md border-none text-white text-center font-sans text-base font-medium transition-colors duration-400  hover:bg-[#555555] focus:bg-white'
    >
      {title}
    </Link>
  );
};

export default GoBackLink;
