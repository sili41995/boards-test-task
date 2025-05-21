import { FC } from 'react';
import { IProps } from './Section.types';

const Section: FC<IProps> = ({ children }) => {
  return <div className='py-4'>{children}</div>;
};

export default Section;
