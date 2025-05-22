import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsBoardsPage = (): boolean => {
  const { pathname } = useLocation();
  const regExp = new RegExp(`^${PagePaths.boards}/?$`);

  const isBoardsPage = regExp.test(pathname);

  return isBoardsPage;
};

export default useIsBoardsPage;
