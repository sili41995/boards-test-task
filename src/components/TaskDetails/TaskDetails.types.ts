import { TaskStatus } from '@/types/tasks.types';

export interface IProps {
  title: string;
  desc: string | undefined;
  status: TaskStatus;
}
