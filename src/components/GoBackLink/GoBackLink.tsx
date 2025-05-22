import { PagePaths } from '@/constants';
import { ILocation } from '@/types/general.types';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GoBackLink: FC = () => {
  const { state }: ILocation = useLocation();
  const goBackPath = state?.from ? state.from : PagePaths.boards;

  return (
    <Link
      to={goBackPath}
      className='self-start inline-block h-full min-w-[200px] px-3 py-3 bg-[#808080] rounded-md border-none text-white text-center font-sans text-base font-medium transition-colors duration-400  hover:bg-[#555555] focus:bg-white'
    >
      Go Back
    </Link>
  );
};

export default GoBackLink;
