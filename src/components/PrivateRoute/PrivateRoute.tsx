import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn, selectIsRefreshing } from '@/store/auth/selectors';
import { PagePaths } from '@/constants';
import { IProps } from './PrivateRoute.types';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const isRefreshing = useAuthStore(selectIsRefreshing);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={PagePaths.signIn} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
