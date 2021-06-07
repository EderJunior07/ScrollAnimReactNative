import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/albums/',
});

export const getHers = async (token: string) =>
  await api.get('03gwRG5IvkStFnjPmgjElw/tracks?market=BR&limit=10&offset=5', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default api;
