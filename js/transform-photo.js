const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const valueSizePhoto = document.querySelector('.scale__control--value');
const photoUploadPreview = document.querySelector('.img-upload__preview');

const STEP_TRANSFORM = 25;

const adjustScalePhoto = (step) => {
  valueSizePhoto.value = String(`${Number(valueSizePhoto.value.slice(0, -1)) + step}%`);
  const meaningTransform = Number(valueSizePhoto.value.slice(0, -1)) / 100;
  photoUploadPreview.style.transform = `scale(${meaningTransform})`;
};

const makePhotoSmaller = () => {
  if(Number(valueSizePhoto.value.slice(0, -1)) > 25){
    adjustScalePhoto(-STEP_TRANSFORM);
  }
};

const makePhotoBigger = () => {
  if(Number(valueSizePhoto.value.slice(0, -1)) < 100){
    adjustScalePhoto(STEP_TRANSFORM);
  }
};

buttonSmaller.addEventListener('click', makePhotoSmaller);

buttonBigger.addEventListener('click', makePhotoBigger);


export {makePhotoSmaller, makePhotoBigger};
