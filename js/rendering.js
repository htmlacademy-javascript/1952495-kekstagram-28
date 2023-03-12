const pictureTeplate = document.querySelector('#picture').content.querySelector('.picture');
const dataList = document.querySelector('.pictures');
const listFragment = document.createDocumentFragment();

const makePhotoData = (renderData) => {
  renderData.forEach(({url, likes, comments}) => {
    const similarObjectClone = pictureTeplate.cloneNode(true);
    similarObjectClone.querySelector('.picture__img').src = url;
    similarObjectClone.querySelector('.picture__likes').textContent = likes;
    similarObjectClone.querySelector('.picture__comments').textContent = comments.length;
    listFragment.append(similarObjectClone);
  });

  dataList.append(listFragment);
};

export {makePhotoData};
