const sceneManager = (function factory() {
  const clear = () => {
    const contain = document.getElementById('main');
    while (contain.firstChild) {
      contain.firstChild.remove();
    }
  };
  
  function addSingle(element, push = true) {
    const elementData = element.getData();
    const container = document.getElementById(elementData.parentId);
    if (push) {
      container.appendChild(element.getElement());
    } else {
      container.insertAdjacentElement('afterBegin', element.getElement());
    }
  }

  function addElements(element) {
    let i = 0;
    while (i < element.length) {
      let data = element[i].getData();
      let tempParent = document.getElementById(data.parentId);
      tempParent.appendChild(element[i].getElement());
      i += 1;
    }
  }

  return {
    addSingle,
    addElements,
    clear,
  };
}());

export default sceneManager;
