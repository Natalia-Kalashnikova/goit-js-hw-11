import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function getGallery(parent, arr) {
  parent.innerHTML = getMarkup(arr);
  lightbox.refresh();
}

function getMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
      ` <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <figure class="gallery-figure">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
            <figcaption class="gallery-figcaption">
              <ul class="gallery-text">
                <li>
                  <span>Likes</span>
                  <p>${likes}</p>
                </li>
                <li>
                  <span>Views</span>
                  <p>${views}</p>
                </li>
                <li>
                  <span>Comments</span>
                  <p>${comments}</p>
                </li>
                <li>
                  <span>Downloads</span>
                  <p>${downloads}</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </a>
      </li>`
    )
    .join('');
}

