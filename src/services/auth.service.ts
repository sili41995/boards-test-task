import HttpService from './http.service';
import {
  Credentials,
  IAuthRes,
  NewUser,
  UserId,
} from '@/types/authStore.types';

class AuthService extends HttpService {
  constructor() {
    super();
  }

  async signUp(data: NewUser): Promise<IAuthRes> {
    const response = await this.post<IAuthRes, NewUser>({
      url: 'sign-up',
      data,
    });

    return response.data;
  }

  async signIn(data: Credentials): Promise<IAuthRes> {
    const response = await this.post<IAuthRes, Credentials>({
      url: 'sign-in',
      data,
    });

    return response.data;
  }

  async signOut(): Promise<UserId> {
    const response = await this.get<UserId>({
      url: 'sign-out',
    });

    return response.data;
  }

  async refreshUser(): Promise<IAuthRes> {
    const response = await this.get<IAuthRes>({
      url: 'current',
    });

    return response.data;
  }
}

const authService = new AuthService();

export default authService;
