import { FC } from 'react';
import { Messages, PageTitles } from '@/constants';

const NotFound: FC = () => (
  <div className='flex flex-col gap-5'>
    <h1 className='text-black text-[36px] font-normal'>
      {PageTitles.notFound}
    </h1>
    <p className='text-[#555] text-base font-normal'>{Messages.notFound}</p>
  </div>
);

export default NotFound;
