import { OnBtnClickFunc } from '@/types/general.types';
import { ITask, SetTask } from '@/types/tasks.types';

export interface IProps {
  task: ITask;
  updateTask: SetTask;
  onDelBtnClick: OnBtnClickFunc;
}
