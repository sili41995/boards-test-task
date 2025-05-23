import { TaskStatuses } from '@/types/tasks.types';
import Titles from './titles';

const taskStatuses: TaskStatuses = [
  {
    title: Titles.todo,
    status: 'todo',
  },
  {
    title: Titles.inProgress,
    status: 'in_progress',
  },
  {
    title: Titles.done,
    status: 'done',
  },
];

export default taskStatuses;
