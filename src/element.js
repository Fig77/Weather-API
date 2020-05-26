const eleM = (name='div', parentId='main', classlist='', id='', twinbrothers = 0, inner='') => {
  let placeElement = null;
  const getElement = () => {
    const tempElement = document.createElement(name);
    tempElement.classList = classlist;
    tempElement.id = id
    tempElement.innerHTML = inner;
    return tempElement;
  }

  const setId = (newId) => {
    id = newId;
  };
  
  const setInner = (text) => {
    inner = text;
  };

  const getData = () => {
    return {name, parentId, classlist, id, twinbrothers, inner};
  }

  const setPlaced = () => {
    if (document.getElementById(id)) {
      placeElement = document.getElementById(id);
     }
  };

  const getPlaced = () => {
    return placeElement;
  };

  return {getElement, getData, setId, setPlaced, getPlaced, setInner};
};

export {
  eleM as
  default,
};
