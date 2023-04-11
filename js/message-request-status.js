import {isEscapeKey} from './auxiliary-functions.js';
import {onDocumentKeydown} from './form-validation.js';

function closeModalCondition (condition) {
  condition.remove();
  document.addEventListener('keydown', onDocumentKeydown);
}


function openModalCondition (condition) {
  const openModalConditionClone = condition.cloneNode(true);
  const closeButton = openModalConditionClone.querySelector('button');

  function onDocumentKeydownSendind (evt) {
    if(isEscapeKey(evt) && openModalConditionClone){
      evt.preventDefault();
      closeModalCondition(openModalConditionClone);
      document.removeEventListener('keydown', onDocumentKeydownSendind);
    }
  }

  function onClickOutField (evt) {
    if (evt.target === openModalConditionClone) {
      closeModalCondition(openModalConditionClone);
      openModalConditionClone.removeEventListener('click', onClickOutField);
    }
  }

  document.removeEventListener('keydown', onDocumentKeydown);

  document.addEventListener('keydown', onDocumentKeydownSendind);

  openModalConditionClone.addEventListener('click', onClickOutField);

  function onClickCloseButton () {
    closeModalCondition(openModalConditionClone);
    closeButton.removeEventListener('click', onClickCloseButton);
  }
  closeButton.addEventListener('click', onClickCloseButton);

  document.body.append(openModalConditionClone);
}

export {openModalCondition};
