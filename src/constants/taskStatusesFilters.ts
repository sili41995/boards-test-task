import { TaskStatusesFilters } from '@/types/tasks.types';
import Titles from './titles';

const taskStatusesFilters: TaskStatusesFilters = [
  { value: '', label: Titles.all },
  { value: 'todo', label: Titles.todo },
  { value: 'in_progress', label: Titles.inProgress },
  { value: 'done', label: Titles.done },
];

export default taskStatusesFilters;
