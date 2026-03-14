import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '55024332-4e4fe5cdde5981dd2414e779d',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return axios.get(url).then(res => res.data);
}
