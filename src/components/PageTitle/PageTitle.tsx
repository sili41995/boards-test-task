import { FC } from 'react';
import { IProps } from './PageTitle.types';

const PageTitle: FC<IProps> = ({ title }) => {
  return (
    <h1 className='uppercase text-black text-2xl font-semibold'>{title}</h1>
  );
};

export default PageTitle;
