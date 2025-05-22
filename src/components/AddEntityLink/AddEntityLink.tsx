import { IPrevLocation } from '@/types/general.types';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IProps } from './AddEntityLink.types';

const AddEntityLink: FC<IProps> = ({ path, title }) => {
  const location = useLocation();
  const linkState: IPrevLocation = { from: location };

  return (
    <Link
      to={path}
      className='block h-full min-w-[100px] px-3 py-3 bg-[#89f2a6] rounded-md border-none text-white text-center font-sans text-base font-medium transition-colors duration-400  hover:bg-[#00c938] focus:bg-white'
      state={linkState}
    >
      {title}
    </Link>
  );
};

export default AddEntityLink;
