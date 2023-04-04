import {isEscapeKey} from './auxiliary-functions.js';
import {onDocumentKeydown} from './form-validation.js';

const submitSuccess = document.querySelector('.success');
const buttonSuccess = document.querySelector('.success__button');
const submitError = document.querySelector('.error');
const buttonError = document.querySelector('.error__button');

const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error();
    });

const getData = () => load(Route.GET_DATA); // почему здесь уазываем только два аргумента

const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);


function closeModalCondition (condition) {
  condition.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydownSuccessSendind);
  document.addEventListener('keydown', onDocumentKeydown);
}


function openModalCondition (condition) {
  condition.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onDocumentKeydownSuccessSendind);
}


buttonSuccess.addEventListener('click', () => {
  closeModalCondition(submitSuccess);
});


buttonError.addEventListener('click', () => {
  closeModalCondition(submitError);
});


function onDocumentKeydownSuccessSendind (evt) {
  if(isEscapeKey(evt) && submitSuccess){
    evt.preventDefault();
    closeModalCondition(submitSuccess);
  }
  if(isEscapeKey(evt) && submitError){
    evt.preventDefault();
    closeModalCondition(submitError);
  }
}


function onClickField (evt) {
  if (evt.target.className !== 'success__inner') {
    closeModalCondition(submitSuccess);
  }
  // submitSuccess.removeEventListener('click', onClickField); // при удалении обработчика ломается закрытие(второй раз не получается закрыть)
}
submitSuccess.addEventListener('click', onClickField);


function onClickFields (evt) {
  if (evt.target.className !== 'error__inner') {
    closeModalCondition(submitError);
  }
  // submitError.removeEventListener('click', onClickFields); // аналогично
}
submitError.addEventListener('click', onClickFields);


export {getData, sendData, openModalCondition};
