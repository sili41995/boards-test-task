import { FC } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { Credentials } from '@/types/authStore.types';
import { regExp, Titles } from '@/constants';
import { useAuthStore } from '@/store/store';
import { selectIsLoading, selectSignIn } from '@/store/auth/selectors';
import { toasts } from '@/utils';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignInForm: FC = () => {
  const [form] = Form.useForm<Credentials>();
  const signIn = useAuthStore(selectSignIn);
  const isLoading = useAuthStore(selectIsLoading);

  const onFinish = (data: Credentials) => {
    signIn(data).catch((error) => {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    });
  };

  return (
    <Form form={form} onFinish={onFinish} className='w-140' {...layout}>
      <Form.Item<Credentials>
        name='email'
        label={Titles.email}
        rules={[{ required: true, pattern: regExp.email }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<Credentials>
        name='password'
        label={Titles.password}
        rules={[{ required: true }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type='primary' htmlType='submit' disabled={isLoading}>
            Sign In
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
