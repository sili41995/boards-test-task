import { LocalStorageKeys } from '@/constants';

const load = (key: LocalStorageKeys): string | undefined => {
  try {
    const serializedState = window.localStorage.getItem(key);

    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Get state error: ', error.message);
    }
  }
};

const localStorage = {
  load,
};

export default localStorage;
