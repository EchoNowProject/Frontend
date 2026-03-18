import { User, UserNotificationSettings, UserPrivacitySettings } from '@/types';
import axios, { AxiosResponse, AxiosError } from '@/api/axios';

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

/* ------------------------- Notification Settings ------------------------- */

export const getUserNotificationsSettings = async (): Promise<UserNotificationSettings> => {
  return axios
    .get(`/user-notifications-settings`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const saveUserNotificationsSettings = async (user: User): Promise<number> => {
  return axios
    .put(`/user-notifications-settings`, {
      general_settings: user.general_settings,
      notification_settings: user.notification_settings,
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

/* ------------------------- Privacity Settings ------------------------- */

export const getUserPrivacitySettings = async (): Promise<UserPrivacitySettings> => {
  return axios
    .get(`/user-privacity-settings`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};

export const saveUserPrivacitySettings = async (user: User): Promise<number> => {
  return axios
    .put(`/user-privacity-settings`, {
      privacity_settings: user.privacity_settings,
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
};
