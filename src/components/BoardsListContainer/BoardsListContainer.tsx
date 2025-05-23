import { FC } from 'react';
import { Empty } from 'antd';
import BoardsList from '@/components/BoardsList';
import { IProps } from './BoardsListContainer.types';

const BoardsListContainer: FC<IProps> = ({ boards }) => {
  const isEmptyList = !boards.length;

  return isEmptyList ? <Empty /> : <BoardsList boards={boards} />;
};

export default BoardsListContainer;
