import { FC } from 'react';
import { IProps } from './BoardsList.types';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import BoardTasksList from '@/components/BoardTasksList';

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
