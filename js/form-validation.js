import {isEscapeKey} from './auxiliary-functions.js';
import {makePhotoSmaller, makePhotoBigger} from './transform-photo.js';
import {resetEffects} from './adjust-effect.js';
import {sendData, openModalCondition} from './api.js';
const uploadFileOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const textHastag = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const photoUploadPreview = document.querySelector('.img-upload__preview');
const photo = document.querySelector('.img-upload__preview img');
const photoUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const submitButton = document.querySelector('.img-upload__submit');
const submitSuccess = document.querySelector('.success');
const submitError = document.querySelector('.error');
const NUMBER_ALLOWED_HASHTAG = 6;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const isHastag = /^#[a-zа-яё0-9]{1,19}$/i;

const checkActiveField = () => document.activeElement === textHastag || document.activeElement === commentField;

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt) && !checkActiveField()){
    evt.preventDefault();
    closeModal();
  }
};

function closeModal () {
  uploadFileOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('keydown', makePhotoSmaller);
  document.removeEventListener('keydown', makePhotoBigger);
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
  photoUploadEffectLevel.classList.add('hidden');
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

pristine.addValidator(textHastag, validateHashtags, 'Недопустимый хештег');

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(pristine.validate()){
      submitButton.disabled = true;
      sendData(new FormData(evt.target))
        .then((data) => {
          onSuccess(data);
          openModalCondition(submitSuccess);
        })
        .catch(() => {
          openModalCondition(submitError);
        })
        .finally(submitButton.disabled = false);
    }
  });
};

export {setUserFormSubmit, closeModal, openModal, onDocumentKeydown};
