import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './AuthFormMessage.types';

const AuthFormMessage: FC<IProps> = ({ message, pageLink, pageTitle }) => {
  return (
    <p className='text-black text-lg font-medium'>
      <Link to={pageLink} className='text-[#38b6ff]'>
        {pageTitle}
      </Link>{' '}
      {message}
    </p>
  );
};

export default AuthFormMessage;
