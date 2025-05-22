import { FC } from 'react';
import { IProps } from './PageContent.types';

const PageContent: FC<IProps> = ({ children }) => {
  return <div className='flex flex-col gap-5'>{children}</div>;
};

export default PageContent;
