import { useState } from 'react';
import { AxiosError } from 'axios';
import { NewTask, NewTaskWithoutBoardId } from '@/types/tasks.types';
import { toasts } from '@/utils';
import { tasksService } from '@/services';
import { IUseAddTaskForm, IUseAddTaskFormProps } from '@/types/hooks.types';
import { Form } from 'antd';

const useAddTaskForm = ({
  boardId,
  addBoardTask,
}: IUseAddTaskFormProps): IUseAddTaskForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm<NewTaskWithoutBoardId>();

  const addTask = async (data: NewTask) => {
    try {
      setIsLoading(true);

      const response = await tasksService.add(data);

      addBoardTask(response);
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
    addTask({ ...data, boardId });
  };

  return { form, onFinish, isLoading };
};

export default useAddTaskForm;
