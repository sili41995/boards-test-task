import { useState } from 'react';
import { Form } from 'antd';
import { AxiosError } from 'axios';
import { tasksService } from '@/services';
import { IUpdateTaskProps, NewTaskWithoutBoardId } from '@/types/tasks.types';
import { toasts } from '@/utils';
import { IUseEditTaskFormProps, IUseTaskForm } from '@/types/hooks.types';

const useEditTaskForm = ({
  updateTask,
  toggleIsEdit,
  id,
}: IUseEditTaskFormProps): IUseTaskForm => {
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

  return { form, onFinish, isLoading };
};

export default useEditTaskForm;
