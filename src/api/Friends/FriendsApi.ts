import axios, { AxiosResponse, AxiosError } from '@/api/axios';
import { Friend } from '@/types';

export const addNewFriend = async (idAlert: number): Promise<string> => {
  return axios
    .post(`/friends/add`, {
      data: {
        idAlert: idAlert,
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getFriends = async (): Promise<Friend[]> => {
  return axios
    .get(`/friends/getFriends`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
