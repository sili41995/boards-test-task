import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, List } from 'antd';
import BoardTasksList from '@/components/BoardTasksList';
import { IProps } from './BoardsList.types';

const BoardsList: FC<IProps> = ({ boards }) => {
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={boards}
      renderItem={({ title, id, tasks }) => (
        <List.Item>
          <Link to={String(id)}>
            <Card title={title}>
              <BoardTasksList tasks={tasks} />
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default BoardsList;
