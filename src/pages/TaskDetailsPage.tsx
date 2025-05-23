import GeneralContainer from '@/components/GeneralContainer';
import GoBackLink from '@/components/GoBackLink';
import PageContent from '@/components/PageContent';
import Section from '@/components/Section';
import { ITask } from '@/types/tasks.types';
import { FC, useEffect, useState } from 'react';
import Task from '@/components/Task';
import { useDynamicParam } from '@/hooks';
import tasksService from '@/services/tasks.service';
import { AxiosError } from 'axios';
import { makeBlur, toasts } from '@/utils';
import Loader from '@/components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import { BtnClickEvent, ILocation } from '@/types/general.types';
import { PagePaths } from '@/constants';

const TaskDetailsPage: FC = () => {
  const [task, setTask] = useState<ITask | null>(null);
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

      await tasksService.remove(id);

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

  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <GoBackLink />
          {task && (
            <Task
              task={task}
              updateTask={updateTask}
              onDelBtnClick={onDelBtnClick}
            />
          )}
          {isLoading && <Loader />}
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default TaskDetailsPage;
