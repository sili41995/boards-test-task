import { useParams } from 'react-router-dom';
import { PagePaths } from '@/constants';

const useDynamicParam = () => {
  const params = useParams();
  const dynamicParam = params[PagePaths.dynamicParam];
  const id = Number(dynamicParam);

  return id;
};

export default useDynamicParam;
