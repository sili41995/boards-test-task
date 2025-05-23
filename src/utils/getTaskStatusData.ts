import { taskStatuses, Titles } from '@/constants';
import { ITaskStatus, TaskStatus } from '@/types/tasks.types';

const getTaskStatusData = (status: TaskStatus): ITaskStatus => {
  const targetStatusData = taskStatuses.find((data) => data.status === status);

  const defaultStatusData: ITaskStatus = {
    status: 'todo',
    title: Titles.unknown,
  };

  const statusData = targetStatusData ?? defaultStatusData;

  return statusData;
};

export default getTaskStatusData;
