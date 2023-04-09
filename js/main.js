import './render-full-images.js';
import './generate-photo-comments.js';
import {setUserFormSubmit, closeModal} from './form-validation.js';
import './transform-photo.js';
import './adjust-effect.js';
import {makePhotoData} from './rendering.js';
import {setFilter} from './filter.js';
import {getData} from './api.js';
import {showAlert, debounce} from './auxiliary-functions.js';
import './new-photo.js';

const imageFilters = document.querySelector('.img-filters');

getData()
  .then((data) => {
    makePhotoData(data);
    imageFilters.classList.remove('img-filters--inactive');
    // setFilterDefault(debounce(() => makePhotoData(data.slice())));
    // setFilterRandom(debounce(() => makePhotoData(data.slice().sort(() => 0.5 - Math.random()).slice(0, COUNT_RANDOM_PHOTO))));
    // setFilterDisscused(debounce(() => makePhotoData(data.slice().sort(sortDescuss))));
    setFilter(debounce(() => makePhotoData(data)));
  })
  .catch(
    () => {
      showAlert('Не удалось загрузить данные. Попробуйте обновить страницу');
    }
  );

setUserFormSubmit(closeModal);
