import axios, { AxiosError, AxiosResponse } from './axios';
import { RelationShipDefault } from '@/types';

export const getAllStatusUser = async (): Promise<RelationShipDefault[]> => {
  return axios
    .get('/status-user')
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const getStatusUser = async (): Promise<RelationShipDefault> => {
  return axios
    .get(`/status-users/get-my-status`)
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const setNewStatus = async (idNewStatus: number): Promise<RelationShipDefault> => {
  return axios
    .put(`/status-users/set-new-status/${idNewStatus}`)
    .then((reponse: AxiosResponse) => {
      return reponse.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

