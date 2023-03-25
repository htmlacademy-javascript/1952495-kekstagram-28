const commentList = document.querySelector('.social__comments');
const elementListCopy = commentList.querySelector('li').cloneNode(true);
const commentsLoader = document.querySelector('.comments-loader');
const idCommentCount = document.querySelector('.social__comment-count--js');
const NUMBER_ALLOWED_COMMENTS = 5;

const renderNewComment = (data) => {
  const comment = elementListCopy.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;
  return(comment);
};

const addComments = (comments) => {
  commentList.textContent = '';
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((element) => {
    commentsFragment.append(renderNewComment(element));
  });
  commentList.append(commentsFragment);
};

const renderComments = (comments) => {
  let shownComments = 0;
  // console.log(`first ${shownComments}`);
  if(NUMBER_ALLOWED_COMMENTS >= comments.length){
    addComments(comments);
    shownComments = comments.length;
    commentsLoader.classList.add('hidden');
  } else{
    commentsLoader.classList.remove('hidden');
    addComments(comments.slice(shownComments, shownComments + NUMBER_ALLOWED_COMMENTS));
    shownComments += NUMBER_ALLOWED_COMMENTS;
    // console.log(`second ${shownComments}`);
    commentsLoader.addEventListener('click', () => {
      addComments(comments.slice(shownComments, shownComments + NUMBER_ALLOWED_COMMENTS));
      shownComments += NUMBER_ALLOWED_COMMENTS;
      // console.log(`third ${shownComments}`);
      if (shownComments >= comments.length) {
        shownComments = comments.length;
        commentsLoader.classList.add('hidden');
      }
      // console.log(`fourth ${shownComments}`);

      idCommentCount.innerHTML = shownComments;
    });
  }
  idCommentCount.innerHTML = shownComments;
};


commentsLoader.addEventListener('click', renderComments);


// commentsLoader.addEventListener('click', () => {

// });

// idCommentCount - это спан в html с количеством выведенных клмментариев
// commentsAmountAll - это количество всех комментариев

// const onLoaderClick = () => {
//   commentList.innerHTML = '';
//   // const calculateAmountComments = Number(idCommentCount.textContent += commentList.getElementsByTagName('li').length);
// };

// commentsLoader.addEventListener('click', onLoaderClick);

export {addComments, renderComments};
// import {getRandomInteger, getRandomArrayElement} from './auxiliary-functions.js';
// import {AUTHOR_COMMENT, AUTHOR_COMMENT_TEXT, ALL_COMMENTS_COUNT} from './generate-data.js';

// const commentList = document.querySelector('.social__comments');
// const commentsLoader = document.querySelector('.comments-loader');
// const idCommentCount = document.querySelector('.social__comment-count--js');
// const COMMENTS_COUNT = 5;

// const onLoaderClick = (data) => {
//   console.log(data);
//   for(let i = 0; i < COMMENTS_COUNT; i++){
//     commentList.innerHTML += `<li class="social__comment">
//     <img class="social__picture" src="${data.avatar}.svg" alt="${data.name}" width="35" height="35">
//     <p class="social__text">${data.message}</p>
//     </li>`;
//   }
//   idCommentCount.textContent = '';
//   const calculateAmountComments = Number(idCommentCount.textContent += commentList.getElementsByTagName('li').length);

//   if(ALL_COMMENTS_COUNT === calculateAmountComments){
//     commentsLoader.classList.add('hidden');
//   }
// };

// commentsLoader.addEventListener('click', onLoaderClick);

// export {commentList, onLoaderClick, commentsLoader};
