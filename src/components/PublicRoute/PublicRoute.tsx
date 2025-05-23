import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Messages, PagePaths } from '@/constants';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn } from '@/store/auth/selectors';
import { toasts } from '@/utils';
import { IProps } from './PublicRoute.types';

export const PublicRoute = ({ element, restricted = false }: IProps) => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const { state } = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const goBackPath = state?.from ?? PagePaths.boards;
  const isShowWarnToast = state && !isLoggedIn;

  useEffect(() => {
    isShowWarnToast && toasts.warnToast(Messages.unauthorized);
  });

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
