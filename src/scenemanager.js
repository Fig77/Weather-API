const sceneManager = (function factory() {
  const clear = () => {
    const contain = document.getElementById('main');
    while (contain.firstChild) {
      contain.firstChild.remove();
    }
  };
  
  function addSingle(element, push = true) {
    const elementData = element.getData();
    console.log(element);
    const container = document.getElementById(elementData.parentId);
    if (push) {
      container.appendChild(element.getElement());
    } else {
      container.insertAdjacentElement('afterBegin', element.getElement());
    }
  }

  function addElements(element) {
    const dad = document.getElementById(element.father);
    let twinCounter = 0;
    while (twinCounter < element.twinbrothers + 1) {
      const tempElement = document.createElement(element.name);
      tempElement.classList = (element.classlist);
      if (element.identifier !== '') {
        tempElement.id = element.identifier + twinCounter;
      }
      tempElement.innerHTML = element.inner;
      dad.appendChild(tempElement);
      twinCounter += 1;
    }
  }

  return {
    addSingle,
    addElements,
    clear,
  };
}());

export default sceneManager;
