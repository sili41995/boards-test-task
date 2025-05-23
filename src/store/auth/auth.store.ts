import setState from '@/store/setState';
import { LocalStorageKeys } from '@/constants';
import initialState from './initialState';
import {
  Credentials,
  GetAuthStateFunc,
  IAuthRes,
  IAuthState,
  NewUser,
  SetAuthStateFunc,
  UserId,
} from '@/types/authStore.types';
import {
  getAuthStoreItem,
  localStorage,
  removeAuthStoreItem,
  setAuthStoreItem,
} from '@/utils';
import {
  refreshUser,
  signIn,
  signUp,
  signOut,
  changeIsRefreshing,
} from './operations';

const savedToken = localStorage.load(LocalStorageKeys.token);

const authSlice = (
  set: SetAuthStateFunc,
  get: GetAuthStateFunc
): IAuthState => ({
  ...initialState,
  isRefreshing: true,
  token: savedToken ?? null,
  signUp: async (data: NewUser): Promise<IAuthRes | undefined> =>
    await signUp({
      set: setState({ set, name: 'signUp' }),
      get,
      data,
    }),
  signIn: async (data: Credentials): Promise<IAuthRes | undefined> =>
    await signIn({
      set: setState({ set, name: 'signIn' }),
      get,
      data,
    }),
  signOut: async (): Promise<UserId | undefined> =>
    await signOut({
      set: setState({ set, name: 'signOut' }),
      get,
      data: undefined,
    }),
  refreshUser: async (): Promise<IAuthRes | undefined> =>
    await refreshUser({
      set: setState({ set, name: 'refreshUser' }),
    }),
  changeIsRefreshing: (data: boolean): void =>
    changeIsRefreshing({
      set: setState({ set, name: 'changeIsRefreshing' }),
      data,
    }),
});

const storageParams = {
  name: LocalStorageKeys.token,
  storage: {
    getItem: getAuthStoreItem,
    setItem: setAuthStoreItem,
    removeItem: removeAuthStoreItem,
  },
};

const devToolsParams = { name: 'authStore' };

const authStore = {
  store: authSlice,
  storageParams,
  devToolsParams,
};

export default authStore;
