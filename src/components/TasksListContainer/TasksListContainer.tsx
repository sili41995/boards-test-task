import { FC } from 'react';
import { Empty } from 'antd';
import TasksList from '@/components/TasksList';
import { taskStatusesFilters } from '@/constants';
import TaskListFilterByStatuses from '@/components/TaskListFilterByStatuses';
import { useFilteredTasks } from '@/hooks';
import { IProps } from './TasksListContainer.types';

const TasksListContainer: FC<IProps> = ({ tasks }) => {
  const filteredTasks = useFilteredTasks(tasks);
  const isEmptyList = !tasks.length;

  return isEmptyList ? (
    <Empty />
  ) : (
    <div className='flex flex-col gap-5'>
      <TaskListFilterByStatuses statuses={taskStatusesFilters} />
      <TasksList tasks={filteredTasks} />
    </div>
  );
};

export default TasksListContainer;
