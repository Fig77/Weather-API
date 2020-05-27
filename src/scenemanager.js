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
      element.setPlaced();
    } else {
      container.insertAdjacentElement('afterBegin', element.getElement());
      element.setPlaced();
    }
  }

  function addSibilings(element) {
    const originalId = element.getData().id;
    const { inner } = element.getData();
    for (let i = 0; i < element.getData().twinbrothers; i += 1) {
      element.setId(`${originalId}-${i}`);
      element.setInner(`${inner[i]}`);
      addSingle(element);
    }
  }

  function addElements(element) {
    let i = 0;
    while (i < element.length) {
      if (element[i].getData().twinbrothers === 0) {
        addSingle(element[i]);
      } else { addSibilings(element[i]); }
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
