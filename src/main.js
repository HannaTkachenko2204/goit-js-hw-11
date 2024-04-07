import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { imageSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputEl = form.elements.imgname.value;
  if (inputEl === '') {
    iziToast.show({
      message: "Field must be filled in!",
      position: 'topRight',
      backgroundColor: 'red',
      messageColor: '#FFFFFF',
      transitionIn: 'fadeln',
      timeout: 4000,
    });
    return;
  }

  imageSearch(inputEl)
    .then(data => {
      const tagsArr = data.hits.flatMap(hit => hit.tags.split(','));
      if (!tagsArr.includes(inputEl)) {
        iziToast.show({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: 'topRight',
          backgroundColor: 'red',
          messageColor: '#FFFFFF',
          transitionIn: 'fadeln',
          timeout: 4000,
        });
        return;
      }

      ulEl.innerHTML = createMarkup(data.hits);
      new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    })
    .catch(error => alert(error))
    .finally(() => form.reset());
}
