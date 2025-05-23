import { TaskBaseType, TaskStatus } from '@/types/tasks.types';

const getTaskBaseType = (status: TaskStatus): TaskBaseType => {
  const type: TaskBaseType =
    status === 'done' ? 'success' : status === 'todo' ? 'secondary' : undefined;

  return type;
};

export default getTaskBaseType;
