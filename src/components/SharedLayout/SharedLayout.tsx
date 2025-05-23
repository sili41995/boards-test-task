import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import Header from '@/components/Header';

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
