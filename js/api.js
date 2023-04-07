import {isEscapeKey} from './auxiliary-functions.js';
import {onDocumentKeydown} from './form-validation.js';
// const buttonError = document.querySelector('.error__button');


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
  condition.remove();
  document.addEventListener('keydown', onDocumentKeydown);
}


function openModalCondition (condition) {
  const openModalConditionClone = condition.cloneNode(true);
  const closeButton = openModalConditionClone.querySelector('button');
  const innerContainer = openModalConditionClone.querySelector('div');

  function onDocumentKeydownSendind (evt) {
    if(isEscapeKey(evt) && openModalConditionClone){
      evt.preventDefault();
      closeModalCondition(openModalConditionClone);
      document.removeEventListener('keydown', onDocumentKeydownSendind);
    }
  }

  function onClickOutField (evt) {
    if (evt.target.className !== innerContainer) {
      closeModalCondition(openModalConditionClone);
      openModalConditionClone.removeEventListener('click', onClickOutField);
    }
  }

  document.removeEventListener('keydown', onDocumentKeydown);

  document.addEventListener('keydown', onDocumentKeydownSendind);

  openModalConditionClone.addEventListener('click', onClickOutField);

  closeButton.addEventListener('click', () =>{
    closeModalCondition(openModalConditionClone);
  });

  document.body.append(openModalConditionClone);
}

export {getData, sendData, openModalCondition};
