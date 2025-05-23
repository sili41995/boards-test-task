import { FC } from 'react';
import { IProps } from './TaskDetails.types';
import { Badge, Card, Space } from 'antd';
import { getStatusLabelColor, getTaskStatusData } from '@/utils';

const TaskDetails: FC<IProps> = ({ title, desc, status }) => {
  const statusData = getTaskStatusData(status);
  const color = getStatusLabelColor(status);

  return (
    <Space direction='vertical' size='large'>
      <Badge.Ribbon text={statusData.title} color={color}>
        <Card title={title} variant='borderless'>
          {desc && <p>{desc}</p>}
        </Card>
      </Badge.Ribbon>
    </Space>
  );
};

export default TaskDetails;
