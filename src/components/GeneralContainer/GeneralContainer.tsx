import { FC } from 'react';
import { IProps } from './GeneralContainer.types';

const GeneralContainer: FC<IProps> = ({ children }) => {
  return <div className='px-4'>{children}</div>;
};

export default GeneralContainer;
