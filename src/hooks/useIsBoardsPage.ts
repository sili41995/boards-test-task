import { useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';

const useIsBoardsPage = (): boolean => {
  const { pathname } = useLocation();
  const regExp = new RegExp(`^${PagePaths.boards}/?$`);

  const isBoardsPage = regExp.test(pathname);

  return isBoardsPage;
};

export default useIsBoardsPage;
