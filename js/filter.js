import {makePhotoData} from './rendering.js';
import {debounce} from './auxiliary-functions.js';

const filterContainer = document.querySelector('.img-filters__form');

const changeActiveButton = (evt) =>{
  const elems = document.querySelector('.img-filters__button--active');
  if(elems !== null){
    elems.classList.remove('img-filters__button--active');
  }
  evt.target.classList.add('img-filters__button--active');
};

filterContainer.addEventListener('click', changeActiveButton);

const sortDescuss = (photo1, photo2) => {
  const comment1 = photo1.comments.length;
  const comment2 = photo2.comments.length;
  return comment2 - comment1;
};

const debounced = (data) => {
  filterContainer.addEventListener('click', debounce((evt) => {
    if(evt.target.id === 'filter-default'){
      const allPicture = document.querySelectorAll('.picture');
      allPicture.forEach((e) => e.remove());
      makePhotoData(data.slice());
    }
    if(evt.target.id === 'filter-random'){
      const allPicture = document.querySelectorAll('.picture');
      allPicture.forEach((e) => e.remove());
      makePhotoData(data.slice().sort(() => 0.5 - Math.random()).slice(0, 10));
    }
    if(evt.target.id === 'filter-discussed'){
      const allPicture = document.querySelectorAll('.picture');
      allPicture.forEach((e) => e.remove());
      makePhotoData(data.slice().sort(sortDescuss));
    }
  }));
};


export {debounced};
