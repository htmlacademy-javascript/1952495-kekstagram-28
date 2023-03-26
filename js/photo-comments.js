import {getRandomInteger, getRandomArrayElement} from './auxiliary-functions.js';
import {AUTHOR_COMMENT, AUTHOR_COMMENT_TEXT} from './generate-data.js';

const comment = document.querySelector('.social__comments');

comment.innerHTML = '';

comment.innerHTML = `<li class="social__comment">
<img class="social__picture" src="img/avatar-${getRandomInteger(1, 6)}.svg" alt="${getRandomArrayElement(AUTHOR_COMMENT)}" width="35" height="35">
<p class="social__text">${getRandomArrayElement(AUTHOR_COMMENT_TEXT)}</p>
</li>`;

for(let i = 0; i < 4; i++){
  comment.innerHTML += `<li class="social__comment">
<img class="social__picture" src="img/avatar-${getRandomInteger(1, 6)}.svg" alt="${getRandomArrayElement(AUTHOR_COMMENT)}" width="35" height="35">
<p class="social__text">${getRandomArrayElement(AUTHOR_COMMENT_TEXT)}</p>
</li>`;
}

