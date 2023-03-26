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
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((element) => {
    commentsFragment.append(renderNewComment(element));
  });

  commentList.append(commentsFragment);
};

const renderComments = (comments) => {
  let shownComments = 0;
  commentList.textContent = '';
  if(NUMBER_ALLOWED_COMMENTS >= comments.length){
    addComments(comments);
    shownComments = comments.length;
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');

    addComments(comments.slice(shownComments, shownComments + NUMBER_ALLOWED_COMMENTS));
    shownComments += NUMBER_ALLOWED_COMMENTS;

    const onLoaderClick = () => {
      addComments(comments.slice(shownComments, shownComments + NUMBER_ALLOWED_COMMENTS));

      shownComments += NUMBER_ALLOWED_COMMENTS;

      if (shownComments >= comments.length) {
        shownComments = comments.length;
        commentsLoader.classList.add('hidden');
        commentsLoader.removeEventListener('click', onLoaderClick);
      }

      idCommentCount.innerHTML = shownComments;
    };

    commentsLoader.addEventListener('click', onLoaderClick);

  }

  idCommentCount.innerHTML = shownComments;
};

export {addComments, renderComments};
