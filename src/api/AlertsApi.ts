import { UserAlert } from '@/types';
import axios, { AxiosError, AxiosResponse } from './axios';

export const getUserAlerts = async (): Promise<UserAlert[]> => {
  return axios
    .get('/user-alerts/getAlerts')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
