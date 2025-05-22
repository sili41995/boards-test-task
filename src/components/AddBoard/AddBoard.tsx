import { FC } from 'react';
import GoBackLink from '@/components/GoBackLink';
import AddBoardForm from '@/components/AddBoardForm';
import { useOutletContext } from 'react-router-dom';
import { IAddBoardPageContext } from '@/types/boards.types';

const AddBoard: FC = () => {
  const { updateBoards }: IAddBoardPageContext = useOutletContext();

  return (
    <div className='flex flex-col gap-5'>
      <GoBackLink />
      <AddBoardForm updateBoards={updateBoards} />
    </div>
  );
};

export default AddBoard;
