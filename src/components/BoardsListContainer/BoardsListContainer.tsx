import { FC } from 'react';
import BoardsList from '@/components/BoardsList';
import { IProps } from './BoardsListContainer.types';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';

const BoardsListContainer: FC<IProps> = ({ boards }) => {
  const isEmptyList = !boards.length;

  return isEmptyList ? (
    <DefaultMessage text={Messages.emptyBoardsList} />
  ) : (
    <BoardsList boards={boards} />
  );
};

export default BoardsListContainer;
