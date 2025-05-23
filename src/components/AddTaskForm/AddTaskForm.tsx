import { FC } from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import { NewTaskWithoutBoardId } from '@/types/tasks.types';
import { taskStatuses, Titles } from '@/constants';
import { useAddTaskForm } from '@/hooks';
import { IProps } from './AddTaskForm.types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddTaskForm: FC<IProps> = ({ boardId, addBoardTask }) => {
  const { form, onFinish, isLoading } = useAddTaskForm({
    boardId,
    addBoardTask,
  });

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<NewTaskWithoutBoardId>
        name='title'
        label={Titles.title}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId>
        name='desc'
        label={Titles.desk}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId> name='status' label={Titles.status}>
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
            {Titles.addTask}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddTaskForm;
