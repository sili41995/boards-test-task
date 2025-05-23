import { Func } from '@/types/general.types';
import { SetTask, TaskStatus } from '@/types/tasks.types';

export interface IProps {
  toggleIsEdit: Func;
  id: number;
  desc: string | undefined;
  title: string;
  status: TaskStatus;
  updateTask: SetTask;
}
