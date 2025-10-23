
import { User } from '@/types/User';
import axios, { AxiosResponse, AxiosError } from '@/api/axios';

export const getUser = async (id: number): Promise<User> => {
    return axios.get(`/users/${id}`).then((response: AxiosResponse) => {
        return response.data
    }).catch((error: AxiosError) => {
        return error;
    })
}

export const registerUser = async (user: User): Promise<void> => {
    return axios.post(`/users`, user).then((response: AxiosResponse) => {
        return response.data
    }).catch((error: AxiosError) => {
        return error;
    })
} 