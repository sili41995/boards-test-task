import { FC } from 'react';
import { IProps } from './BoardTasksList.types';
import { List } from 'antd';

const BoardTasksList: FC<IProps> = ({ tasks }) => {
  return (
    <List
      dataSource={tasks}
      renderItem={({ title }) => (
        <List.Item>
          <List.Item.Meta title={title} />
        </List.Item>
      )}
    />
  );
};

export default BoardTasksList;
