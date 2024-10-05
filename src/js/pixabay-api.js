import axios from 'axios';
import { BASE_URL, KEY, PER_PAGE } from './config';

export async function fetchImg(params) {
  console.log(params);
  const options = new URLSearchParams({
    ...params,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
  });

  const url = `${BASE_URL}?${options}`;

  const {
    data: { hits, totalHits },
    status,
  } = await axios.get(url);

  if (status !== 200) {
    throw new Error('An error occurred. Please try again later!');
  }

  return { hits, totalHits };
}
