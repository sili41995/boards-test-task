import { useEffect } from 'react';
import { useAuthStore } from '@/store/store';
import {
  selectChangeIsRefreshing,
  selectIsRefreshing,
  selectRefreshUser,
  selectToken,
} from '@/store/auth/selectors';

const useRefreshUser = (): boolean => {
  const isRefreshing = useAuthStore(selectIsRefreshing);
  const token = useAuthStore(selectToken);
  const refreshUser = useAuthStore(selectRefreshUser);
  const changeIsRefreshing = useAuthStore(selectChangeIsRefreshing);

  useEffect(() => {
    if (!token) {
      changeIsRefreshing(false);

      return;
    }

    refreshUser();
  }, [changeIsRefreshing, refreshUser, token]);

  return isRefreshing;
};

export default useRefreshUser;
