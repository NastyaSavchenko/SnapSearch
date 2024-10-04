import { BASE_URL } from './config';
import { KEY } from './config';

export function fetchImg(searchParams = 'pug') {
  return fetch(
    `${BASE_URL}?key=${KEY}&q=${searchParams}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) {
      throw new Error('error');
    }
    return res.json();
  });
}
