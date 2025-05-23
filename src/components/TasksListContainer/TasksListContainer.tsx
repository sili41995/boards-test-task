import { FC } from 'react';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';
import TasksList from '@/components/TasksList';
import { IProps } from './TasksListContainer.types';

const TasksListContainer: FC<IProps> = ({ tasks }) => {
  const isEmptyList = !tasks.length;

  return isEmptyList ? (
    <DefaultMessage text={Messages.emptyTasksList} />
  ) : (
    <TasksList tasks={tasks} />
  );
};

export default TasksListContainer;
