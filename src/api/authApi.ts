import { User } from '@/types';
import axios, { AxiosResponse, AxiosError } from '@/api/axios';

interface AuthResponseLogin {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: User;
}

export const registerUser = async (user: User): Promise<string> => {
  return axios
    .post(`/users/new`, user)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const loginUser = async (user: User): Promise<AuthResponseLogin> => {
  return axios
    .post('/login', user)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};

export const logout = async (): Promise<string> => {
  return axios
    .post('/logout')
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const me = async (): Promise<User> => {
  return axios
    .post('/me')
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const updatePassword = async (
  actualPassword: string,
  newPassword: string,
  confirmPassword: string
): Promise<string> => {
  return axios
    .post('/update-password', {
      data: {
        actualPassword: actualPassword,
        newPassword: newPassword,
        newPassword_confirmation: confirmPassword,
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error.response?.data;
    });
};
