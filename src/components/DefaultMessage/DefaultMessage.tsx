import { FC } from 'react';
import { IProps } from './DefaultMessage.types';

const DefaultMessage: FC<IProps> = ({ text }) => {
  return <p className='text-black text-lg font-normal'>{text}</p>;
};

export default DefaultMessage;
