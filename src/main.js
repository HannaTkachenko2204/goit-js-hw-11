//логікa роботи додатка
const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const inputEl = form.elements.imgname.value;
  if (inputEl === '') {
    alert('Field must be filled in!');
    return;
  }

  const API_KEY = '43261093-4c9b6888dd775193ca00ecdb2';
  const BASE_URL = 'https://pixabay.com/api';

  const params = new URLSearchParams({
    key: API_KEY,
    q: `${inputEl}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      ulEl.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    })
    .catch(error => alert(error));

  function createMarkup(arr) {
    return arr
      .map(
        ({ previewURL, largeImageURL, tags }) =>
`<li class="gallery-item">
    <a class="gallery-link" href=${largeImageURL}>
        <img 
            class="gallery-image" 
            src=${previewURL} 
            alt=${tags}
        />
    </a>
</li>`
      )
      .join('');
  }

  form.reset();
});
