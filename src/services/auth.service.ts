import {
  Credentials,
  IAuthRes,
  NewUser,
  UserId,
} from '@/types/authStore.types';
import HttpService from './http.service';

class AuthService extends HttpService {
  constructor() {
    super();
  }

  async signUp(data: NewUser): Promise<IAuthRes> {
    const response = await this.post<IAuthRes, NewUser>({
      url: 'auth/sign-up',
      data,
    });

    return response.data;
  }

  async signIn(data: Credentials): Promise<IAuthRes> {
    const response = await this.post<IAuthRes, Credentials>({
      url: 'auth/sign-in',
      data,
    });

    return response.data;
  }

  async signOut(): Promise<UserId> {
    const response = await this.post<UserId, undefined>({
      url: 'auth/sign-out',
    });

    return response.data;
  }

  async refreshUser(): Promise<IAuthRes> {
    const response = await this.get<IAuthRes>({
      url: 'auth/current',
    });

    return response.data;
  }
}

const authService = new AuthService();

export default authService;
