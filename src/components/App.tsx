import { FC, lazy } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import PublicRoute from '@/components/PublicRoute';

const SignInPage = lazy(() => import('@/pages/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const BoardsPage = lazy(() => import('@/pages/BoardsPage'));
const BoardDetails = lazy(() => import('@/pages/BoardDetails'));
const TasksPage = lazy(() => import('@/pages/TasksPage'));
const TaskDetails = lazy(() => import('@/pages/TaskDetails'));
const PrivateRoute = lazy(() => import('@/components/PrivateRoute'));
const AddTask = lazy(() => import('@/components/AddTask'));
const PrivateRoute = lazy(() => import('@/components/PrivateRoute'));

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.root} element={<SharedLayout />}>
        <Route index element={<SignInPage />} />
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
          <Route path={`:${PagePaths.dynamicParam}`} element={<BoardDetails />}>
            <Route path={PagePaths.addTask} element={<AddTask />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Route>
        <Route
          path={PagePaths.tasks}
          element={<PrivateRoute element={<TasksPage />} />}
        >
          <Route
            path={`:${PagePaths.dynamicParam}`}
            element={<TaskDetails />}
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
