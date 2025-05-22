import { FC, lazy } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import PublicRoute from '@/components/PublicRoute';
import Loader from '@/components/Loader';
import { useRefreshUser } from '@/hooks';

const SignInPage = lazy(() => import('@/pages/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const BoardsPage = lazy(() => import('@/pages/BoardsPage'));
const BoardDetailsPage = lazy(() => import('@/pages/BoardDetailsPage'));
const TasksPage = lazy(() => import('@/pages/TasksPage'));
const TaskDetailsPage = lazy(() => import('@/pages/TaskDetailsPage'));
const PrivateRoute = lazy(() => import('@/components/PrivateRoute'));
const AddTask = lazy(() => import('@/components/AddTask'));
const AddBoard = lazy(() => import('@/components/AddBoard'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const isRefreshing = useRefreshUser();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.root} element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signIn}
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signUp}
          element={<PublicRoute restricted element={<SignUpPage />} />}
        />
        <Route
          path={PagePaths.boards}
          element={<PrivateRoute element={<BoardsPage />} />}
        >
          <Route path={PagePaths.addBoard} element={<AddBoard />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route
          path={`${PagePaths.boards}/:${PagePaths.dynamicParam}`}
          element={<PrivateRoute element={<BoardDetailsPage />} />}
        >
          <Route path={PagePaths.addTask} element={<AddTask />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route
          path={PagePaths.tasks}
          element={<PrivateRoute element={<TasksPage />} />}
        >
          <Route
            path={`:${PagePaths.dynamicParam}`}
            element={<TaskDetailsPage />}
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
