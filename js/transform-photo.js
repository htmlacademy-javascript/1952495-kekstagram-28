const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const valueSizePhoto = document.querySelector('.scale__control--value');
const photoUploadPreview = document.querySelector('.img-upload__preview img');

const STEP_TRANSFORM = 25;
const MAX_VALUE_TRANSFORM = 100;
const FIRST_SYMBOL = 0;
const LAST_SYMBOL = -1;

const adjustScalePhoto = (step) => {
  valueSizePhoto.value = String(`${Number(valueSizePhoto.value.slice(FIRST_SYMBOL, LAST_SYMBOL)) + step}%`);
  const meaningTransform = Number(valueSizePhoto.value.slice(FIRST_SYMBOL, -1)) / MAX_VALUE_TRANSFORM;
  photoUploadPreview.style.transform = `scale(${meaningTransform})`;
};

const makePhotoSmaller = () => {
  if(Number(valueSizePhoto.value.slice(FIRST_SYMBOL, LAST_SYMBOL)) > STEP_TRANSFORM){
    adjustScalePhoto(-STEP_TRANSFORM);
  }
};

const makePhotoBigger = () => {
  if(Number(valueSizePhoto.value.slice(FIRST_SYMBOL, LAST_SYMBOL)) < MAX_VALUE_TRANSFORM){
    adjustScalePhoto(STEP_TRANSFORM);
  }
};

buttonSmaller.addEventListener('click', makePhotoSmaller);

buttonBigger.addEventListener('click', makePhotoBigger);

export {makePhotoSmaller, makePhotoBigger};
