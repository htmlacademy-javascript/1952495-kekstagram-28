import {dataList} from './rendering.js'; // document.querySelector('.pictures');
import {isEscapeKey, getRandomArrayElement} from './auxiliary-functions.js';
import {DESCRIPTION_PHOTO} from './generate-data.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicturePreview = bigPictureContainer.querySelector('.big-picture__preview');
const userModalCloseElement = bigPictureContainer.querySelector('.big-picture__cancel');
const likesAmount = bigPictureContainer.querySelector('.likes-count');
const commentsAmount = bigPictureContainer.querySelector('.comments-count');
const commentCount = bigPictureContainer.querySelector('.social__comment-count');
const commentLoader = bigPictureContainer.querySelector('.comments-loader');
const descriptionPhoto = bigPictureContainer.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  bigPictureContainer.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal () {
  bigPictureContainer.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalCloseElement.addEventListener('click', () => {
  closeModal();
});

const showBigPicture = (evt) => {
  if(evt.target.closest('.picture')) {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    bigPicturePreview.querySelector('.big-picture__img img').src = evt.target.src;
    likesAmount.textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
    commentsAmount.textContent = evt.target.closest('.picture').querySelector('.picture__comments').textContent;
    descriptionPhoto.textContent = getRandomArrayElement(DESCRIPTION_PHOTO);
    commentCount.classList.add('hidden');
    commentLoader.classList.add('hidden');
    openModal();
  }
  document.addEventListener('keydown', onDocumentKeydown);
};

dataList.addEventListener('click', showBigPicture);

export {dataList};

