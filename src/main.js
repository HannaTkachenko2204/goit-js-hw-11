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
    alert('Field must be filled in!');
    return;
  }

  imageSearch(inputEl)
    .then(data => {
      const tagsArr = data.hits.flatMap(hit => hit.tags.split(','));
      if (!tagsArr.includes(inputEl)) {
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      ulEl.innerHTML = createMarkup(data.hits);
    })
    .catch(error => alert(error))
    .finally(() => form.reset());
}
