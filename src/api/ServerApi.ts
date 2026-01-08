import { error } from 'node:console';
import axios, { AxiosError, AxiosResponse } from './axios';
import { Server } from '@/types';

export const createNewServer = async (newServer: Server): Promise<string> => {
  return axios
    .post('/servers', newServer)
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.message;
    });
};
