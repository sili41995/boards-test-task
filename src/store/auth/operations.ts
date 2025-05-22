import initialState from './initialState';
import { AxiosError } from 'axios';
import {
  IAuthOperationProps,
  IAuthRes,
  ISignInOperationProps,
  ISignUpOperationProps,
  UserId,
} from '@/types/authStore.types';
import authService from '@/services/auth.service';
import operationWrapper from './operationWrapper';

const signUpOperation = async ({
  set,
  data,
}: ISignUpOperationProps): Promise<IAuthRes | undefined> => {
  const result = await authService.signUp(data);

  set({
    token: result.token,
    user: {
      id: result.id,
      name: result.name,
      email: result.email,
    },
  });

  return result;
};

const signInOperation = async ({
  set,
  data,
}: ISignInOperationProps): Promise<IAuthRes | undefined> => {
  const result = await authService.signIn(data);

  set({
    token: result.token,
  });

  return result;
};

const signOutOperation = async ({
  set,
}: IAuthOperationProps): Promise<UserId | undefined> => {
  const result = await authService.signOut();

  set(initialState);

  return result;
};

const refreshUserOperation = async ({
  set,
}: IAuthOperationProps): Promise<IAuthRes | undefined> => {
  try {
    set({ isRefreshing: true, isLoading: true, error: initialState.error });

    const result = await authService.refreshUser();

    set({
      user: result,
      isLoggedIn: true,
    });

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      set({ error: error.message });
      throw new Error(error.response?.data.message);
    }
  } finally {
    set({
      isLoading: initialState.isLoading,
      isRefreshing: false,
    });
  }
};

export const signUp = operationWrapper(signUpOperation);
export const signIn = operationWrapper(signInOperation);
export const signOut = operationWrapper(signOutOperation);
export const refreshUser = refreshUserOperation;
