import { FC } from 'react';
import { Divider } from 'antd';
import { IProps } from './BoardDetails.types';
import TasksList from '@/components/TasksList';
import GoBackLink from '@/components/GoBackLink';

const BoardDetails: FC<IProps> = ({ tasks, title }) => {
  return (
    <div className='flex flex-col gap-5'>
      <GoBackLink />
      <Divider orientation='left'>{title}</Divider>
      <TasksList tasks={tasks} />
    </div>
  );
};

export default BoardDetails;
