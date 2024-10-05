import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api';
import { renderImg } from './js/render-functions';
import { refs } from './js/refs';

const lightbox = new SimpleLightbox('.gallery-list a');

let page = 1;
let q = null;

function handleLoadMoreClick() {
  page += 1;
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { query } = form.elements;
  refs.gallery.innerHTML = '';

  refs.loader.style.display = 'block';
  q = query.value.trim();
  const params = { q, page };

  if (!q) {
    iziToast.error({
      position: 'topRight',
      iconColor: '#FAFAFB',
      message: 'Сan not be empty or contain only spaces!',
      backgroundColor: '#EF4040',
    });
    refs.loader.style.display = 'none';
    return;
  }

  try {
    const { hits, totalHits } = await fetchImg(params);
    refs.loader.style.display = 'none';
    if (hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        iconColor: '#FAFAFB',
        message: `Sorry, there are no images matching <br/>your search query. Please try again!`,
        backgroundColor: '#EF4040',
      });
      refs.form.reset();
    } else {
      refs.gallery.innerHTML = '';
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
    console.log(error);
  }

  // fetchImg(query.value.trim())
  //   .then(data => {
  //     const imgArr = data.hits;

  //     if (imgArr.length === 0) {
  //       iziToast.error({
  //         position: 'topRight',
  //         iconColor: '#FAFAFB',
  //         message: `Sorry, there are no images matching <br/>your search query. Please try again!`,
  //         backgroundColor: '#EF4040',
  //       });
  //       refs.form.reset();
  //     } else {
  //       refs.gallery.innerHTML = '';
  //       renderImg(imgArr);
  //       lightbox.refresh();
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  //   .finally(() => {
  //     refs.loader.style.display = 'none';
  //   });

  refs.form.reset();
}

refs.form.addEventListener('submit', handleFormSubmit);
refs.loadbtnEl.addEventListener('click', handleLoadMoreClick);
