import axios from 'axios';

export const apiUrl = (url: string): string => {
  return `${process.env.SERVER_API_URL}/${url}`;
}
export const clientApiUrl = (url: string): string => {
  return `${process.env.NEXT_PUBLIC_SERVER_API_URL}/${url}`;
}

export const getFetcher = <T>(url: string) => axios.get<T>(url).then((res) => res.data);
export const postFetcher = <T, D>(url: string, param: D) => axios.post<T>(url, param).then((res):T => res.data);

export const swrGetFetcher = <T>(url: string) => axios.get<T>(url).then((res) => res.data);
export const swrPostFetcher = (url: any) => (param: any) => {
  console.log('url', url);
  console.log('param', param)
  return  axios.post<any>(url, param).then((res) => res.data)
}
