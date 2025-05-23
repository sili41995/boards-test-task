import { FC } from 'react';
import { Divider } from 'antd';
import TasksList from '@/components/TasksList';
import GoBackLink from '@/components/GoBackLink';
import { IProps } from './BoardDetails.types';

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
