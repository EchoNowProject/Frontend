import axios, { AxiosResponse, AxiosError } from '@/api/axios';

export const addNewFriend = async (idAlert: number): Promise<string> => {
  return axios
    .post(`/friend/add`, {
      data: {
        idAlert: idAlert,
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};
