import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'o86JJ73JEg9D--a1xwRUPkuMpLrfbXsG_RsWXFk3LpM';
const BASE_URL = 'https://rickandmortyapi.com/api';

export const getUnsplashPhotos = async (query) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
  return response.data.results;
};

export const getRickAndMortyCharacters = async () => {
  const response = await axios.get(`${BASE_URL}/character`);
  return response.data.results;
};

export const searchRickAndMortyCharacter = async (name) => {
  const response = await axios.get(`${BASE_URL}/character/?name=${name}`);
  return response.data.results;
};
