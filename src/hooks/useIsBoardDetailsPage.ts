import { useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';

const useIsBoardDetailsPage = (): boolean => {
  const { pathname } = useLocation();
  const regExp = new RegExp(`^${PagePaths.boards}/\\d+/?$`);

  const isBoardDetailsPage = regExp.test(pathname);

  return isBoardDetailsPage;
};

export default useIsBoardDetailsPage;
