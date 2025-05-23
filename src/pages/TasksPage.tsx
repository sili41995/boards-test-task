import { FC } from 'react';
import Section from '@/components/Section';
import GeneralContainer from '@/components/GeneralContainer';
import PageContent from '@/components/PageContent';
import PageTitle from '@/components/PageTitle';
import { PageTitles } from '@/constants';
import Loader from '@/components/Loader';
import TasksListContainer from '@/components/TasksListContainer';
import { useTasksPage } from '@/hooks';

const TasksPage: FC = () => {
  const { tasks, isLoading } = useTasksPage();

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
