import axios, { AxiosResponse, AxiosError } from '@/api/axios';
import { User } from '@/types';

export const searchManyUsers = async (input: string): Promise<User[]> => {
  return axios
    .get(`/friend-request/search/${input}`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const sendFriendRequest = async (idUser: number): Promise<string> => {
  return axios
    .post(`/friend-request/send`, {
      data: {
        id: idUser,
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};
