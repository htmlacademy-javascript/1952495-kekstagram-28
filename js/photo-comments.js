import {getRandomInteger, getRandomArrayElement} from './auxiliary-functions.js';
import {AUTHOR_COMMENT, AUTHOR_COMMENT_TEXT, ALL_COMMENTS_COUNT} from './generate-data.js';

const comment = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const idCommentCount = document.querySelector('.social__comment-count--js');
const COMMENTS_COUNT = 5;

const generateComments = () => {
  comment.innerHTML += `<li class="social__comment">
  <img class="social__picture" src="img/avatar-${getRandomInteger(1, 6)}.svg" alt="${getRandomArrayElement(AUTHOR_COMMENT)}" width="35" height="35">
  <p class="social__text">${getRandomArrayElement(AUTHOR_COMMENT_TEXT)}</p>
  </li>`;
};

const onLoaderClick = () => {
  for(let i = 0; i < COMMENTS_COUNT; i++){
    generateComments();
  }
  idCommentCount.textContent = ''; // доделать
  const calculateAmountComments = Number(idCommentCount.textContent += comment.getElementsByTagName('li').length);

  if(ALL_COMMENTS_COUNT === calculateAmountComments){
    commentsLoader.classList.add('hidden');
  }
};

commentsLoader.addEventListener('click', onLoaderClick);

export {comment, onLoaderClick, commentsLoader};
