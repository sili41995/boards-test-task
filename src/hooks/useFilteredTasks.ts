import { useMemo } from 'react';
import { SearchParamsKeys } from '@/constants';
import { filterTasksByStatus } from '@/utils';
import { Tasks } from '@/types/tasks.types';
import useSetSearchParams from './useSetSearchParams';

const useFilteredTasks = (tasks: Tasks): Tasks => {
  const { searchParams } = useSetSearchParams();

  const status = searchParams.get(SearchParamsKeys.status) ?? '';

  const filteredTasks = useMemo(
    () => filterTasksByStatus({ tasks, status }),
    [tasks, status]
  );

  return filteredTasks;
};

export default useFilteredTasks;
