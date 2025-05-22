import { IAuthStateLS } from '@/types/authStore.types';

const setAuthStoreItem = (name: string, { state }: IAuthStateLS): void => {
  localStorage.setItem(name, JSON.stringify(state.token));
};

export default setAuthStoreItem;
