import axios from 'axios';
import { parseCookies } from 'nookies';

const apiServer = (ctx?: any) => {
  const { 'next-template--token': existingToken } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (existingToken) {
    api.defaults.headers['Authorization'] = `Bearer ${existingToken}`;
  }

  return api;
};

export { apiServer };
