// const buttonFilterDefault = document.querySelector('#filter-default');
// const buttonFilterRandom = document.querySelector('#filter-random');
// const buttonFilterDiscussed = document.querySelector('#filter-discussed');
const filterContainer = document.querySelector('.img-filters__form');

const sortDescuss = (photo1, photo2) => {
  const comment1 = photo1.comments.length;
  const comment2 = photo2.comments.length;
  return comment2 - comment1;
};

const setFilter = (cb) => {

  filterContainer.addEventListener('click', (evt) => {
    if(evt.target.id === 'filter-default'){
      const allPicture = document.querySelectorAll('.picture');
      allPicture.forEach((e) => e.remove());
      cb().slice();
    }
    if(evt.target.id === 'filter-random'){
      const allPicture = document.querySelectorAll('.picture');
      allPicture.forEach((e) => e.remove());
      cb().slice().sort(() => 0.5 - Math.random()).slice(0, 10);
    }
    if(evt.target.id === 'filter-discussed'){
      const allPicture = document.querySelectorAll('.picture');
      allPicture.forEach((e) => e.remove());
      cb().slice().sort(sortDescuss);
    }
  });
};

// const setFilterRandom = (cb) => {
//   buttonFilterRandom.addEventListener('click', () => {
//     const allPicture = document.querySelectorAll('.picture');
//     allPicture.forEach((e) => e.remove());
//     cb();
//   });
// };

// const setFilterDisscused = (cb) => {
//   buttonFilterDiscussed.addEventListener('click', () => {
//     const allPicture = document.querySelectorAll('.picture');
//     allPicture.forEach((e) => e.remove());
//     cb();
//   });
// };


export {setFilter};
