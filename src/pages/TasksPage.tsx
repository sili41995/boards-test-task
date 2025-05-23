import { FC, useEffect, useState } from 'react';
import Section from '@/components/Section';
import GeneralContainer from '@/components/GeneralContainer';
import PageContent from '@/components/PageContent';
import PageTitle from '@/components/PageTitle';
import { PageTitles } from '@/constants';
import { Tasks } from '@/types/tasks.types';
import Loader from '@/components/Loader';
import TasksListContainer from '@/components/TasksListContainer';
import { toasts } from '@/utils';
import { AxiosError } from 'axios';
import tasksService from '@/services/tasks.service';

const TasksPage: FC = () => {
  const [tasks, setTasks] = useState<Tasks | null>(null);
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

  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <PageTitle title={PageTitles.tasks} />
          {tasks && <TasksListContainer tasks={tasks} />}
          {isLoading && <Loader />}
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default TasksPage;
