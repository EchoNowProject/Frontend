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
    .get(`/friends/get`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const deleteFriend = async (friend: Friend): Promise<string> => {
  return axios
    .delete(`/friends/delete`, {
      data: {
        idFriend: friend.first_user_id,
        usernameFriend: friend.first_user_username,
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
