import { FC } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { useAddBoardForm } from '@/hooks';
import { NewBoard } from '@/types/boards.types';
import { Titles } from '@/constants';
import { IProps } from './AddBoardForm.types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddBoardForm: FC<IProps> = ({ updateBoards }) => {
  const { form, onFinish, isLoading } = useAddBoardForm(updateBoards);

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<NewBoard>
        name='title'
        label={Titles.title}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type='primary' htmlType='submit' disabled={isLoading}>
            {Titles.addBoard}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddBoardForm;
