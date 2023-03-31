const photo = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const Effects = {
  'effect-none': 'effects__preview--none',
  'effect-chrome': 'effects__preview--chrome',
  'effect-sepia': 'effects__preview--sepia',
  'effect-marvin': 'effects__preview--marvin',
  'effect-phobos': 'effects__preview--phobos',
  'effect-heat': 'effects__preview--heat',
};

const addEffect = (evt) => {
  photo.classList.add(Effects[evt.target.id]);
  if(photo.classList.length > 1){
    photo.classList.remove(photo.classList.item(0));
  }
};

effectsList.addEventListener('click', addEffect);

export{addEffect};

