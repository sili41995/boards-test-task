import { FC } from 'react';
import { List } from 'antd';
import { IProps } from './BoardTasksList.types';

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
