import { FC } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { NewUser } from '@/types/authStore.types';
import { regExp } from '@/constants';
import { useAuthStore } from '@/store/store';
import { selectIsLoading, selectSignUp } from '@/store/auth/selectors';
import { toasts } from '@/utils';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUpForm: FC = () => {
  const [form] = Form.useForm<NewUser>();
  const signUp = useAuthStore(selectSignUp);
  const isLoading = useAuthStore(selectIsLoading);

  const signUpProfile = (data: NewUser) => {
    signUp(data).catch((error) => {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    });
  };

  const onFinish = (data: NewUser) => {
    signUpProfile(data);
  };

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<NewUser> name='name' label='Name' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item<NewUser>
        name='email'
        label='Email'
        rules={[{ required: true, pattern: regExp.email }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<NewUser>
        name='password'
        label='Password'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type='primary' htmlType='submit' disabled={isLoading}>
            Sign Up
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
