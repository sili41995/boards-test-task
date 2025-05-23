import { FC } from 'react';
import GoBackLink from '@/components/GoBackLink';
import AddTaskForm from '@/components/AddTaskForm';
import { useDynamicParam } from '@/hooks';
import { useOutletContext } from 'react-router-dom';
import { IAddTaskPageContext } from '@/types/boards.types';
import { Titles } from '@/constants';

const AddTask: FC = () => {
  const boardId = useDynamicParam();
  const { addBoardTask }: IAddTaskPageContext = useOutletContext();

  return (
    <div className='flex flex-col gap-5'>
      <GoBackLink title={Titles.close} />
      <AddTaskForm boardId={boardId} addBoardTask={addBoardTask} />
    </div>
  );
};

export default AddTask;
