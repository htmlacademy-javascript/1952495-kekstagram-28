import {allObjects} from './generate-data.js';
import {showBigPicture} from './render-full-images.js';

const pictureTeplate = document.querySelector('#picture').content.querySelector('.picture');
const dataList = document.querySelector('.pictures');
const listFragment = document.createDocumentFragment();

const makePhotoData = (renderData) => {
  renderData.forEach((data) => {
    const similarObjectClone = pictureTeplate.cloneNode(true);
    similarObjectClone.querySelector('.picture__img').src = data.url;
    similarObjectClone.querySelector('.picture__likes').textContent = data.likes;
    similarObjectClone.querySelector('.picture__comments').textContent = data.comments.length; //map((item) => item.name)
    similarObjectClone.addEventListener('click', () => {
      showBigPicture(data);
    });
    listFragment.append(similarObjectClone);
  });

  dataList.append(listFragment);
};

makePhotoData(allObjects);

export {makePhotoData, dataList};
