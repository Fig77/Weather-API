import eleM from './element';
import sm from './scenemanager';
import {
  github,
} from './svg';


const header = (() => {
  const containerElement = eleM('header', 'body', 'd-flex align-i-center justify-c-center header');
  containerElement.setId('header-nav');
  const createHeader = () => {
    sm.addSingle(containerElement, false);
    let container = document.getElementById('header-nav');
    container.insertAdjacentHTML('afterBegin', github);
  };

  return {
    createHeader
  };
})();

export {
  header as
  default,
};