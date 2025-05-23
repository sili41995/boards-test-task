import { useSearchParams } from 'react-router-dom';
import {
  IUpdateSearchParamsProps,
  IUseSetSearchParams,
} from '@/types/hooks.types';

const useSetSearchParams = (): IUseSetSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = ({
    key,
    value,
  }: IUpdateSearchParamsProps): void => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    setSearchParams(searchParams);
  };

  return { updateSearchParams, searchParams, setSearchParams };
};

export default useSetSearchParams;
