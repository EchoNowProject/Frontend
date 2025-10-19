import got from 'got';
import { User } from '@/types/User';

const baseUrl: string = "http://127.0.0.1:8000/api";

export const getUser = async (id: number): Promise<User> => {
    return got.get(baseUrl + `/users/${id}`).json();
}   