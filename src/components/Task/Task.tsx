import { FC, useState } from 'react';
import { IProps } from './Task.types';
import { Titles } from '@/constants';
import TaskControls from '@/components/TaskControls';
import EditTaskForm from '@/components/EditTaskForm';
import TaskDetails from '@/components/TaskDetails';
import { BtnClickEvent } from '@/types/general.types';
import { makeBlur } from '@/utils';

const Task: FC<IProps> = ({ task, updateTask, onDelBtnClick }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const editBtnTitle = isEdit ? Titles.close : Titles.edit;
  const { id, status, title, desc } = task;

  const toggleIsEdit = () => {
    setIsEdit((prevState) => !prevState);
  };

  const onEditBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleIsEdit();
  };

  return (
    <>
      <div className='flex flex-col gap-5'>
        <TaskControls
          editBtnTitle={editBtnTitle}
          onEditBtnClick={onEditBtnClick}
          onDelBtnClick={onDelBtnClick}
        />
        {isEdit ? (
          <EditTaskForm
            updateTask={updateTask}
            desc={desc}
            status={status}
            title={title}
            id={id}
            toggleIsEdit={toggleIsEdit}
          />
        ) : (
          <TaskDetails desc={desc} status={status} title={title} />
        )}
      </div>
    </>
  );
};

export default Task;
