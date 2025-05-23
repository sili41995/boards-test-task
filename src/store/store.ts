import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IAuthState } from '@/types/authStore.types';
import authStore from './auth/auth.store';

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(authStore.store, authStore.storageParams),
    authStore.devToolsParams
  )
);
