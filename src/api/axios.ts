import axios, { type AxiosError, AxiosResponse } from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// Hay que hacerlo con interceptors para que el valor cambie durante la ejecucion
axios.interceptors.request.use((config) => {
  const auth = localStorage.getItem('auth');

  if (auth) {
    const token = JSON.parse(auth).token;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axios;

export type { AxiosError, AxiosResponse };
