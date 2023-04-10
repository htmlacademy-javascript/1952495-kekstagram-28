import {showBigPicture} from './render-full-images.js';

const pictureTeplate = document.querySelector('#picture').content.querySelector('.picture');
const dataList = document.querySelector('.pictures');
const listFragment = document.createDocumentFragment();


const makePhotoData = (renderData) => {
  renderData
    .forEach((data) => {
      const similarObjectClone = pictureTeplate.cloneNode(true);
      similarObjectClone.querySelector('.picture__img').src = data.url;
      similarObjectClone.querySelector('.picture__likes').textContent = data.likes;
      similarObjectClone.querySelector('.picture__comments').textContent = data.comments.length;
      similarObjectClone.addEventListener('click', () => {
        showBigPicture(data);
      });
      listFragment.append(similarObjectClone);
    });
  dataList.append(listFragment);
};


export {makePhotoData, dataList};
