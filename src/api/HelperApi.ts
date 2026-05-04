import axios, { AxiosResponse, AxiosError } from '@/api/axios';

export const downloadFile = (internalPath: string) => {
  return axios
    .get('/file/download/', {
      params: {
        internalPath: internalPath,
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
