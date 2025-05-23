import { FC, useState } from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import {tasksService} from '@/services';
import { IUpdateTaskProps, NewTaskWithoutBoardId } from '@/types/tasks.types';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';
import { taskStatuses } from '@/constants';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm<NewTaskWithoutBoardId>();

  const updateTaskById = async ({ data, id }: IUpdateTaskProps) => {
    try {
      setIsLoading(true);

      const result = await tasksService.updateById({ data, id });

      updateTask(result);
      toggleIsEdit();
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
    updateTaskById({ data, id });
  };

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<NewTaskWithoutBoardId>
        name='title'
        label='Title'
        rules={[{ required: true }]}
        initialValue={title}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId>
        name='desc'
        label='Description'
        rules={[{ required: true }]}
        initialValue={desc}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewTaskWithoutBoardId>
        name='status'
        label='Status'
        initialValue={status}
      >
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
            Update Task
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default EditTaskForm;
