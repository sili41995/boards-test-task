import { FC } from 'react';
import BoardsList from '@/components/BoardsList';
import { IProps } from './BoardsListContainer.types';
import { Empty } from 'antd';

const BoardsListContainer: FC<IProps> = ({ boards }) => {
  const isEmptyList = !boards.length;

  return isEmptyList ? <Empty /> : <BoardsList boards={boards} />;
};

export default BoardsListContainer;
