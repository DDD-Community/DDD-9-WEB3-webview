import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Api {
  private instance: AxiosInstance;
  private token: string;

  constructor() {
    this.token = '';
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_SERVER_API_URL,
    });

    this.instance.interceptors.request.use(
      (config: any) => {
        console.log('api request gogo - ', this.token);
        if (this.token) {
          config.headers['Authorization'] = 'Bearer ' + this.token;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public setToken(token: string): void {
    console.log(this.token, ' : ',token)
    this.token = token;
  }

  // public get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
  //   return this.instance.get(url, config);
  // }
  //
  // public post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
  //   return this.instance.post(url, data, config);
  // }

  public get = <T>(url: string) => axios.get<T>(url).then((res) => res.data);
  public post = <T, D>(url: string, param: D) => axios.post<T>(url, param).then((res):T => res.data);
}

export default new Api();
