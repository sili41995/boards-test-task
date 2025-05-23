import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import SignOutBtn from '@/components/SignOutBtn';
import { useIsBoardDetailsPage, useIsBoardsPage } from '@/hooks';
import AddEntityLink from '@/components/AddEntityLink';
import { PagePaths, PageTitles } from '@/constants';
import { getAdditionalSlash } from '@/utils';

const AuthUserControls: FC = () => {
  const { pathname } = useLocation();
  const isBoardsPage = useIsBoardsPage();
  const isBoardDetailsPage = useIsBoardDetailsPage();
  const additionalSlash = getAdditionalSlash(pathname);

  const addTaskPath = `${pathname}${additionalSlash}${PagePaths.addTask}`;
  const addBoardPath = `${pathname}${additionalSlash}${PagePaths.addBoard}`;

  return (
    <div className='flex gap-5'>
      {isBoardsPage && (
        <AddEntityLink path={addBoardPath} title={PageTitles.addBoard} />
      )}
      {isBoardDetailsPage && (
        <AddEntityLink path={addTaskPath} title={PageTitles.addTask} />
      )}
      <SignOutBtn />
    </div>
  );
};

export default AuthUserControls;
