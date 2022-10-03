import axios from 'axios';

export const api = 'https://api.jikan.moe/v4/';

export const axiosBase = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  headers: {
    'Content-type': 'application/json'
  }
});
