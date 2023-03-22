import {dataList} from './rendering.js'; // document.querySelector('.pictures');
import {isEscapeKey} from './auxiliary-functions.js';
import {comment, commentsLoader, onLoaderClick} from './photo-comments.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicturePreview = bigPictureContainer.querySelector('.big-picture__preview');
const userModalCloseElement = bigPictureContainer.querySelector('.big-picture__cancel');
const likesAmount = bigPictureContainer.querySelector('.likes-count');
const commentsAmount = bigPictureContainer.querySelector('.comments-count');
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

const showBigPicture = (data) => {
  document.querySelector('body').classList.add('modal-open');
  bigPicturePreview.querySelector('.big-picture__img img').src = data.url;
  likesAmount.textContent = data.likes;
  commentsAmount.textContent = data.comments.length;
  descriptionPhoto.textContent = data.description;
  commentsLoader.classList.remove('hidden');
  comment.innerHTML = '';
  onLoaderClick(data.comments);
  openModal();
  document.addEventListener('keydown', onDocumentKeydown);
};

export {dataList, showBigPicture};

