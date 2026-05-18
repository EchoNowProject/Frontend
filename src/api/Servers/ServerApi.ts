import axios, { AxiosError, AxiosResponse } from '../axios';
import { Server, ServerChatConversation } from '@/types';

interface CreateNewServerResponse {
  message: string;
  server: Server;
  server_chat_conversation: ServerChatConversation;
}

export const createNewServer = async (newServer: Server): Promise<CreateNewServerResponse> => {
  return axios
    .post('/servers', newServer)
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getServersByUser = async (): Promise<Server[]> => {
  return axios
    .get('/servers')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getServer = async (idServer: number): Promise<Server> => {
  return axios
    .get(`/servers/${idServer}`)
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
