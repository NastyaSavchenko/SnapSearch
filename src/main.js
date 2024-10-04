import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api';
import { renderImg } from './js/render-functions';

const formEl = document.querySelector('.search-container');
const galleryEl = document.querySelector('.gallery-list');
const lightbox = new SimpleLightbox('.gallery-list a');
const loaderEl = document.querySelector('.loader');

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { query } = form.elements;
  galleryEl.innerHTML = '';

  loaderEl.style.display = 'block';

  fetchImg(query.value.trim())
    .then(data => {
      const imgArr = data.hits;

      if (imgArr.length === 0) {
        iziToast.error({
          position: 'topRight',
          iconColor: '#FAFAFB',
          message: `Sorry, there are no images matching <br/>your search query. Please try again!`,
          backgroundColor: '#EF4040',
        });
        formEl.reset();
      } else {
        galleryEl.innerHTML = '';
        renderImg(imgArr);
        lightbox.refresh();
      }
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      loaderEl.style.display = 'none';
    });

  formEl.reset();
}

formEl.addEventListener('submit', handleFormSubmit);
