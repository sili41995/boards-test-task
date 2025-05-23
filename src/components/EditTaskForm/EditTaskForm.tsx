import { FC } from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import { useEditTaskForm } from '@/hooks';
import { taskStatuses, Titles } from '@/constants';
import { NewTaskWithoutBoardId } from '@/types/tasks.types';
import { IProps } from './EditTaskForm.types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditTaskForm: FC<IProps> = ({
  toggleIsEdit,
  id,
  desc,
  title,
  status,
  updateTask,
}) => {
  const { form, onFinish, isLoading } = useEditTaskForm({
    updateTask,
    toggleIsEdit,
    id,
  });

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<NewTaskWithoutBoardId>
        name='title'
        label={Titles.title}
        rules={[{ required: true }]}
        initialValue={title}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId>
        name='desc'
        label={Titles.desk}
        rules={[{ required: true }]}
        initialValue={desc}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId>
        name='status'
        label={Titles.status}
        initialValue={status}
      >
        <Select placeholder={Titles.selectStatus} allowClear>
          {taskStatuses.map(({ status, title }) => (
            <Select.Option key={status} value={status}>
              {title}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type='primary' htmlType='submit' disabled={isLoading}>
            {Titles.updTask}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default EditTaskForm;
