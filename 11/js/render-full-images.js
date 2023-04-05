import {dataList} from './rendering.js'; // document.querySelector('.pictures');
import {isEscapeKey} from './auxiliary-functions.js';
import {renderComments} from './generate-photo-comments.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicturePreview = bigPictureContainer.querySelector('.big-picture__preview');
const userModalCloseElement = bigPictureContainer.querySelector('.big-picture__cancel');
const likesAmount = bigPictureContainer.querySelector('.likes-count');
const commentsAmountAll = bigPictureContainer.querySelector('.comments-count');
const descriptionPhoto = bigPictureContainer.querySelector('.social__caption');
const body = document.querySelector('body');

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
  document.removeEventListener('keydown', renderComments);
  body.classList.remove('modal-open');
}

userModalCloseElement.addEventListener('click', () => {
  closeModal();
});

const renderBigPicture = (data) => {
  bigPicturePreview.querySelector('.big-picture__img img').src = data.url;
  likesAmount.textContent = data.likes;
  commentsAmountAll.textContent = data.comments.length;
  descriptionPhoto.textContent = data.description;
  renderComments(data.comments);
};

const showBigPicture = (data) => {
  body.classList.add('modal-open');
  renderBigPicture(data);
  openModal();
  document.addEventListener('keydown', onDocumentKeydown);
};

export {dataList, showBigPicture, commentsAmountAll, onDocumentKeydown};

