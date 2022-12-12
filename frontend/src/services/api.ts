import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://friendlist-production.up.railway.app/',
});

export const login = async (username: string, password: string) => {
  return api.post('login', { username, password });
};

export const getFriendlist = async (token: string) => {
  return api.get(
    'friendlist', {
      headers: {
        'authorization': token
      }
    });
};
