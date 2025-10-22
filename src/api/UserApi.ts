
import { User } from '@/types/User';
import axios, { AxiosError, AxiosResponse } from 'axios';

const baseUrl: string = "http://127.0.0.1:8000/api";

export const getUser = async (id: number): Promise<User> => {
    return axios.get(baseUrl + `/users/${id}`).then((response: AxiosResponse) => {
        return response.data
    }).catch((error: AxiosError) => {
        return error;
    })
}

export const registerUser = async (user: User): Promise<void> => {
    return axios.post(baseUrl + `/users`, user).then((response: AxiosResponse) => {
        return response.data
    }).catch((error: AxiosError) => {
        return error;
    })
} 