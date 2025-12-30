import { User } from '@/types/User';
import axios, { AxiosResponse, AxiosError } from '@/api/axios';

interface AuthResponseLogin {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: User;
}

export const registerUser = async (user: User): Promise<string> => {
  return axios
    .post(`/users`, user)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};

export const loginUser = async (user: User): Promise<AuthResponseLogin> => {
  return axios
    .post('/login', user)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.message;
    });
};

export const logout = async (): Promise<string> => {
  return axios
    .post('/logout')
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.message;
    });
};

export const me = async (): Promise<User> => {
  return axios
    .post('/me')
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.message;
    });
};
