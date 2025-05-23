import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { ITask, TaskOrNull } from '@/types/tasks.types';
import { useDynamicParam } from '@/hooks';
import {tasksService} from '@/services';
import { makeBlur, toasts } from '@/utils';
import { BtnClickEvent, ILocation } from '@/types/general.types';
import { PagePaths } from '@/constants';
import { IUseTaskDetailsPage } from '@/types/hooks.types';

const useTaskDetailsPage = (): IUseTaskDetailsPage => {
  const [task, setTask] = useState<TaskOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const taskId = useDynamicParam();
  const { state }: ILocation = useLocation();
  const redirectPath = state?.from ?? PagePaths.tasks;

  const updateTask = (data: ITask) => {
    setTask(data);
  };

  const updateIsLoading = (data: boolean) => {
    setIsLoading(data);
  };

  const deleteTask = async (id: number) => {
    try {
      updateIsLoading(true);

      await tasksService.deleteById(id);

      navigate(redirectPath);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;

        toasts.errorToast(errorMessage);
      }
    } finally {
      updateIsLoading(false);
    }
  };

  const onDelBtnClick = (e: BtnClickEvent) => {
    if (!task) {
      return;
    }

    makeBlur(e.currentTarget);

    deleteTask(task.id);
  };

  useEffect(() => {
    const getBoardById = async (id: number) => {
      try {
        updateIsLoading(true);

        const response = await tasksService.getById(id);

        setTask(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.message;

          toasts.errorToast(errorMessage);
        }
      } finally {
        updateIsLoading(false);
      }
    };

    getBoardById(taskId);
  }, [taskId]);

  return { task, updateTask, onDelBtnClick, isLoading };
};

export default useTaskDetailsPage;
