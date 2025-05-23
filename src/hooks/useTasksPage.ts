import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { TasksOrNull } from '@/types/tasks.types';
import { toasts } from '@/utils';
import { tasksService } from '@/services';
import { IUseTasksPage } from '@/types/hooks.types';

const useTasksPage = (): IUseTasksPage => {
  const [tasks, setTasks] = useState<TasksOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getBoards = async () => {
      try {
        setIsLoading(true);

        const response = await tasksService.getAll();

        setTasks(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.message;

          toasts.errorToast(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getBoards();
  }, []);

  return { tasks, isLoading };
};

export default useTasksPage;
