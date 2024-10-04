const galleryEl = document.querySelector('.gallery-list');

function createMarkupLi(img) {
  const {
    tags,
    comments,
    downloads,
    largeImageURL,
    likes,
    views,
    webformatURL,
  } = img;

  return `<li class="gallery-item">
            <div class="img-container">
             <a href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" />
              </a>
            </div>
            <ul class="info-list">
              <li class="info-item">
                <p class="info-name">Likes</p>
                <p class="info-value">${likes}</p>
              </li>
              <li>
                <p class="info-name">Views</p>
                <p class="info-value">${views}</p>
              </li>
              <li>
                <p class="info-name">Comments</p>
                <p class="info-value">${comments}</p>
              </li>
              <li>
                <p class="info-name">Downloads</p>
                <p class="info-value">${downloads}</p>
              </li>
            </ul>
          </li>`;
}

export const renderImg = data => {
  const imgMarkup = data.map(createMarkupLi).join('');
  galleryEl.insertAdjacentHTML('beforeend', imgMarkup);
};
