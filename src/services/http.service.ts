import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpConfig<T> extends AxiosRequestConfig {
  url: string;
  data?: T;
  signal?: AbortSignal;
}

class HttpService {
  constructor(
    public baseUrl: string = import.meta.env.VITE_APP_SERVER_URL,
    public fetchingService: AxiosInstance = axios,
    public apiVersion: string = 'api'
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string): string {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig(): { Authorization: string } {
    const token = JSON.parse(localStorage.getItem('token') || '');
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  private extractUrlAndDataFromConfig<T>(
    config: HttpConfig<T>
  ): AxiosRequestConfig {
    const updatedConfig = { ...config };
    updatedConfig.url = '';
    updatedConfig.data = undefined;
    return updatedConfig;
  }

  get<T>(config: HttpConfig<T>, withAuth = true): Promise<AxiosResponse<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.get<T>(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post<T, K>(
    config: HttpConfig<K>,
    withAuth = true
  ): Promise<AxiosResponse<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.post<T>(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  patch<T, K>(
    config: HttpConfig<K>,
    withAuth = true
  ): Promise<AxiosResponse<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.patch<T>(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put<T, K>(config: HttpConfig<K>, withAuth = true): Promise<AxiosResponse<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.put<T>(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete<T>(config: HttpConfig<T>, withAuth = true): Promise<AxiosResponse<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.delete<T>(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}

export default HttpService;
