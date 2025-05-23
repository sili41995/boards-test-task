import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTaskBaseType } from '@/utils';
import { PagePaths } from '@/constants';
import { List, Typography } from 'antd';
import { IProps } from './TasksList.types';
import { IPrevLocation } from '@/types/general.types';

const TasksList: FC<IProps> = ({ tasks }) => {
  const location = useLocation();
  const state: IPrevLocation = {
    from: location,
  };

  return (
    <List
      bordered
      dataSource={tasks}
      renderItem={({ title, id, status, desc }) => {
        const type = getTaskBaseType(status);
        const linkPath = `${PagePaths.tasks}/${id}`;

        return (
          <List.Item>
            <Link to={linkPath} state={state} className='w-full'>
              <Typography.Paragraph type={type} strong={true}>
                {title}
              </Typography.Paragraph>
              {desc && <Typography.Paragraph>{desc}</Typography.Paragraph>}
            </Link>
          </List.Item>
        );
      }}
    />
  );
};

export default TasksList;
