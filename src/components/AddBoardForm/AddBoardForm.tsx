import { FC, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { toasts } from '@/utils';
import { NewBoard } from '@/types/boards.types';
import { AxiosError } from 'axios';
import boardsService from '@/services/boards.service';
import { IProps } from './AddBoardForm.types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddBoardForm: FC<IProps> = ({ updateBoards }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm<NewBoard>();

  const addBoard = async (data: NewBoard) => {
    try {
      setIsLoading(true);

      const response = await boardsService.add(data);

      updateBoards(response);
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

  const onFinish = (data: NewBoard) => {
    addBoard(data);
  };

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<NewBoard>
        name='title'
        label='Title'
        rules={[{ required: true }]}
      >
        <Input />
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

export default AddBoardForm;
