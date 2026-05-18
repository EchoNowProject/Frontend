import axios, { AxiosResponse, AxiosError } from '@/api/axios';

export const getUsersAvailable = async (idServer: number): Promise<void> => {
  return axios
    .get(`/server/get-users-available/${idServer}`)
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const inviteUserServer = async (idServer: number, idFriend: number): Promise<void> => {
  return axios
    .post('/server/invite-user', {
      data: {
        idServer: idServer,
        idFriend: idFriend,
      },
    })
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
