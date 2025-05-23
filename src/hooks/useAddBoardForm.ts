import { useState } from 'react';
import { AxiosError } from 'axios';
import { Form } from 'antd';
import { NewBoard, SetBoards } from '@/types/boards.types';
import { toasts } from '@/utils';
import { boardsService } from '@/services';
import { IUseAddBoardForm } from '@/types/hooks.types';

const useAddBoardForm = (updateBoards: SetBoards): IUseAddBoardForm => {
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

  return { form, onFinish, isLoading };
};

export default useAddBoardForm;
