import axios, { AxiosResponse, AxiosError } from '@/api/axios';
import { UserAlert } from '@/types';

export const getUserAlert = async (): Promise<UserAlert> => {
  return axios
    .get(`/user-alerts/getAlerts`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};
