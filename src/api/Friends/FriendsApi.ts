import axios, { AxiosResponse, AxiosError } from '@/api/axios';
import { FriendResponse } from '@/types';

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

export const getFriends = async (): Promise<FriendResponse[]> => {
  return axios
    .get(`/friends/get`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const deleteFriend = async (friend: FriendResponse): Promise<string> => {
  return axios
    .delete(`/friends/delete`, {
      data: {
        idFriend: friend.id,
        usernameFriend: friend.username,
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
