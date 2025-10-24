import { User } from '@/types/User';
import axios, { AxiosResponse, AxiosError } from '@/api/axios';

export const registerUser = async (user: User): Promise<string> => {
    return axios.post(`/users`, user).then((response: AxiosResponse) => {
        return response.data
    }).catch((error: AxiosError) => {
        return error;
    })
}

export const loginUser = async (user: User): Promise<string> => {
    return axios.post('/login', user).then((response: AxiosResponse) => {
        return response.data
    }).catch((error: AxiosError) => {
        return error.message;
    });
}