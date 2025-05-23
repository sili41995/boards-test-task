import { FC } from 'react';
import { Titles } from '@/constants';
import { IProps } from './TaskControls.types';

const TaskControls: FC<IProps> = ({
  editBtnTitle,
  onEditBtnClick,
  onDelBtnClick,
}) => {
  return (
    <div className='flex gap-5'>
      <button
        type='button'
        onClick={onEditBtnClick}
        className='min-w-[100px] px-3 py-3 rounded-md border-none bg-[#7fd1ff] text-white text-center font-sans text-base font-medium transition-colors duration-400 hover:bg-[#2681ed] focus:bg-[#2681ed]'
      >
        {editBtnTitle}
      </button>
      <button
        type='button'
        onClick={onDelBtnClick}
        className='min-w-[100px] px-3 py-3 rounded-md border-none bg-[#ff9192] text-white text-center font-sans text-base font-medium transition-colors duration-400 hover:bg-[#d3232f] focus:bg-[#d3232f]'
      >
        {Titles.delete}
      </button>
    </div>
  );
};

export default TaskControls;
