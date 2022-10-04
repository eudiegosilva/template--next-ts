import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'next-template--token': existingToken } = parseCookies();

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(config => {
  console.log(config);

  // return Promise.resolve(config);
  return config;
});

if (existingToken) {
  api.defaults.headers['Authorization'] = `Bearer ${existingToken}`;
}

export { api };
