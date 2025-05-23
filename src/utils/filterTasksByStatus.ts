import { IFilterTasksByStatusProps, Tasks } from '@/types/tasks.types';

const filterTasksByStatus = ({
  status,
  tasks,
}: IFilterTasksByStatusProps): Tasks => {
  if (!status) {
    return tasks;
  }

  const filteredTasks = tasks.filter(
    (task) => task.status.toLowerCase() === status.toLowerCase()
  );

  return filteredTasks;
};

export default filterTasksByStatus;
