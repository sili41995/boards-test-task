import { FC } from 'react';
import GeneralContainer from '@/components/GeneralContainer';
import GoBackLink from '@/components/GoBackLink';
import PageContent from '@/components/PageContent';
import Section from '@/components/Section';
import Task from '@/components/Task';
import Loader from '@/components/Loader';
import { useTaskDetailsPage } from '@/hooks';

const TaskDetailsPage: FC = () => {
  const { task, updateTask, onDelBtnClick, isLoading } = useTaskDetailsPage();

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
