import { User } from '@/types';
import axios, { AxiosResponse, AxiosError } from '@/api/axios';

interface ResponseUpdateError {
  user: User;
  error: string;
}

export const getUser = async (id: number): Promise<User> => {
  return axios
    .get(`/users/${id}`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const updateUser = async (user: User): Promise<User> => {
  try {
    const response = await axios.put(`/user/update`, user);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error);
  }
};
