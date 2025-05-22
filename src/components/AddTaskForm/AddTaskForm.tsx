import { FC, useState } from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import { NewTask, NewTaskWithoutBoardId } from '@/types/tasks.types';
import { taskStatuses } from '@/constants';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';
import tasksService from '@/services/tasks.service';
import { IProps } from './AddTaskForm.types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddTaskForm: FC<IProps> = ({ boardId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm<NewTaskWithoutBoardId>();

  const addBoard = async (data: NewTask) => {
    try {
      setIsLoading(true);

      const response = await tasksService.add(data);

      //   updateBoards(response);
      form.resetFields();
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;

        toasts.errorToast(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onFinish = (data: NewTaskWithoutBoardId) => {
    addBoard({ ...data, boardId });
  };

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<NewTaskWithoutBoardId>
        name='title'
        label='Title'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId>
        name='desc'
        label='Description'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId> name='status' label='Status'>
        <Select placeholder='Select task status' allowClear>
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
            Add Board
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddTaskForm;
