const sceneManager = (function factory() {
  const clear = () => {
    const contain = document.getElementById('main');
    while (contain.firstChild) {
      contain.firstChild.remove();
    }
  };
  
  function addSingle(element) {
    const elementData = element.getData();
    const container = document.getElementById(elementData.parentId);
    container.appendChild(element);
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
    addElement,
    clear,
  };
}());
export default sceneManager;
