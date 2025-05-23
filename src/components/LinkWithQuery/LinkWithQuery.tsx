import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';

const LinkWithQuery: FC<IProps> = ({ children, to, state, className }) => {
  const { search } = useLocation();
  const path = to + search;

  return (
    <Link to={path} state={state} className={className}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
