import { StorageValue } from 'zustand/middleware';
import { NumberOrNull, StringOrNull } from './general.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;
  token: StringOrNull;
}

export type NewUser = Pick<IUser, 'email' | 'name' | 'password'>;

export type Credentials = Pick<IUser, 'email' | 'password'>;

export interface IUserState {
  id: NumberOrNull;
  name: StringOrNull;
  email: StringOrNull;
}

export interface IAuthInitialState {
  user: IUserState;
  token: StringOrNull;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: StringOrNull;
}

export interface IAuthRes extends IUserState {
  token: string;
}

export type UserId = Pick<IUser, 'id'>;

export interface IAuthState extends IAuthInitialState {
  signUp: (data: NewUser) => Promise<IAuthRes | undefined>;
  signIn: (data: Credentials) => Promise<IAuthRes | undefined>;
  signOut: () => Promise<UserId | undefined>;
  refreshUser: () => Promise<IAuthRes | undefined>;
}

export type SetAuthStateFunc = SetStateFunc<IAuthState>;

export type GetAuthStateFunc = GetStateFunc<IAuthState>;

export interface IAuthStateLS {
  state: IAuthState;
}

export type GetItem =
  | StorageValue<IAuthState>
  | Promise<StorageValue<IAuthState>>
  | null;

export interface IAuthOperationProps {
  set: SetAuthStateFunc;
}

export interface ISignInOperationProps extends IAuthOperationProps {
  data: Credentials;
}

export interface ISignUpOperationProps extends IAuthOperationProps {
  data: NewUser;
}
