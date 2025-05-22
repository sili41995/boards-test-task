import { GetItem } from '@/types/authStore.types';

const getAuthStoreItem = (name: string): GetItem => {
  const value = localStorage.getItem(name);

  return value ? JSON.parse(value) : null;
};

export default getAuthStoreItem;
