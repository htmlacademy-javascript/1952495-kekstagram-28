import './render-full-images.js';
import './generate-photo-comments.js';
import {setUserFormSubmit, closeModal} from './form-validation.js';
import './transform-photo.js';
import './adjust-effect.js';
import {makePhotoData} from './rendering.js';
import {getData} from './api.js';
import {showAlert} from './auxiliary-functions.js';

getData()
  .then((data) => {
    makePhotoData(data);
  })
  .catch(
    () => {
      showAlert('Не удалось загрузить данные. Попробуйте обновить страницу');
    }
  );

setUserFormSubmit(closeModal);
