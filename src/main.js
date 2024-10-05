import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api';
import { renderImg } from './js/render-functions';
import { refs } from './js/refs';
import { PER_PAGE } from './js/config';

const lightbox = new SimpleLightbox('.gallery-list a');

let page = 1;
let q = null;
let pages = 0;

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { query } = form.elements;

  q = query.value.trim();
  page = 1;

  refs.gallery.innerHTML = '';
  refs.loader.classList.remove('js-is-hidden');
  refs.loadbtnEl.classList.add('js-is-hidden');

  if (!q) {
    iziToast.error({
      position: 'topRight',
      iconColor: '#FAFAFB',
      message: 'Сan not be empty or contain only spaces!',
      backgroundColor: '#EF4040',
    });
    refs.loader.classList.add('js-is-hidden');
    return;
  }

  refs.loader.classList.remove('js-is-hidden');

  try {
    const params = { q, page };
    const { hits, totalHits } = await fetchImg(params);

    pages = Math.ceil(totalHits / PER_PAGE);

    refs.loader.classList.add('js-is-hidden');
    refs.loadbtnEl.classList.remove('js-is-hidden');

    if (hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        iconColor: '#FAFAFB',
        message: `Sorry, there are no images matching <br/>your search query. Please try again!`,
        backgroundColor: '#EF4040',
      });

      refs.loadbtnEl.classList.add('js-is-hidden');
      refs.form.reset();
    } else {
      renderImg(hits);
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      iconColor: '#FAFAFB',
      message: `An error occurred. Please try again later!`,
      backgroundColor: '#FF0000',
    });

    refs.loader.classList.add('js-is-hidden');
    console.log(error);
  } finally {
    refs.loader.classList.add('js-is-hidden');
  }

  refs.form.reset();
}

async function handleLoadMoreClick() {
  page += 1;

  if (page > pages) {
    refs.loadbtnEl.classList.add('js-is-hidden');
    iziToast.info({
      position: 'topRight',
      iconColor: '#FAFAFB',
      message: `We're sorry, but you've reached the end of search results.`,
      backgroundColor: '#FF0000',
    });
    return;
  }

  refs.loader.classList.remove('js-is-hidden');

  try {
    const params = { q, page };
    const { hits } = await fetchImg(params);
    renderImg(hits);
    lightbox.refresh();

    window.scrollBy({
      top:
        document.querySelector('.gallery-list').getBoundingClientRect().height *
        2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      iconColor: '#FAFAFB',
      message: `An error occurred. Please try again later!`,
      backgroundColor: '#FF0000',
    });
    refs.loader.classList.add('js-is-hidden');
    console.log(error);
  } finally {
    refs.loader.classList.add('js-is-hidden');
  }
}

refs.form.addEventListener('submit', handleFormSubmit);
refs.loadbtnEl.addEventListener('click', handleLoadMoreClick);
