import axios, { AxiosError, AxiosResponse } from 'axios';

//axios config
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export default axios;

export type { AxiosError, AxiosResponse };