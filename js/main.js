import './render-full-images.js';
import './generate-photo-comments.js';
import {setUserFormSubmit, closeModal} from './form-validation.js';
import './transform-photo.js';
import './adjust-effect.js';
import {makePhotoData} from './rendering.js';
import {debounced} from './filter.js';
import {getData} from './api.js';
import {showAlert} from './auxiliary-functions.js';
import './new-photo.js';

const imageFilters = document.querySelector('.img-filters');

getData()
  .then((data) => {
    makePhotoData(data);
    imageFilters.classList.remove('img-filters--inactive');
    debounced(data);
  })
  .catch(
    () => {
      showAlert('Не удалось загрузить данные. Попробуйте обновить страницу');
    }
  );

setUserFormSubmit(closeModal);
