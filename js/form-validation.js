
// import {onDocumentKeydown} from './render-full-images.js'; // Не работает
import {isEscapeKey} from './auxiliary-functions.js';
import {makePhotoSmaller, makePhotoBigger} from './transform-photo.js';
import {addEffect} from './change-effect.js';
import {resetEffects} from './adjust-effect.js';
const uploadFileOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const textHastag = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const photoUploadPreview = document.querySelector('.img-upload__preview');
const photo = document.querySelector('.img-upload__preview img');
const NUMBER_ALLOWED_HASHTAG = 6;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const isHastag = /^#[a-zа-яё0-9]{1,19}$/i;
// const identicalHashtags = /\b(\w+)\b.*\b\1\b/g;


const checkActiveField = () => document.activeElement === textHastag || document.activeElement === commentField;


const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt) && !checkActiveField()){
    evt.preventDefault();
    closeModal();
  }
};


function closeModal () { // почему стрелочная функция не работает
  uploadFileOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('keydown', makePhotoSmaller);
  document.removeEventListener('keydown', makePhotoBigger);
  document.removeEventListener('keydown', addEffect);
  form.reset();
  pristine.reset();
  photoUploadPreview.style.transform = 'scale(1)';
  photo.classList.remove(photo.classList.item(0));
  photo.classList.add('effects__preview--none');
  resetEffects();
}

function openModal () {
  uploadFileOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

uploadFile.addEventListener('change', () => {
  openModal();
});


uploadCancel.addEventListener('click', () => {
  closeModal();
});


const checkAmoutHashtag = (value) => value.length <= NUMBER_ALLOWED_HASHTAG;

const checkTextHashtag = (value) => isHastag.test(value);

const searchSameHashtag = (value) => {
  const lowerHashtag = value.map((tag) => tag.toLowerCase());
  return lowerHashtag.length === new Set(lowerHashtag).size;
};

const validateHashtags = (value) => {
  const tags = value.trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return checkAmoutHashtag(tags) && tags.every(checkTextHashtag) && searchSameHashtag(tags);

};

// const checkHashtag = (value) => {
//   const arrayHashtag = value.split(' ');
//   return arrayHashtag.every((tag) => isHastag.test(tag));
// };


pristine.addValidator(textHastag, validateHashtags, 'Недопустимый хештег');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(pristine.validate()){
    form.submit();
  }
});
