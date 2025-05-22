import { FC } from 'react';
import GoBackLink from '@/components/GoBackLink';
import AddTaskForm from '@/components/AddTaskForm';
import { useDynamicParam } from '@/hooks';

const AddTask: FC = () => {
  const boardId = useDynamicParam();

  return (
    <div className='flex flex-col gap-5'>
      <GoBackLink />
      <AddTaskForm boardId={boardId} />
    </div>
  );
};

export default AddTask;
