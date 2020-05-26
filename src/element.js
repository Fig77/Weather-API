const eleM = (name='div', parentId='main', classlist='', id='', twinbrothers=0, inner='') => {
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
  }
  
  const getData = () => {
    return {name, parentId, classlist, twinbrothers, id, inner};
  }
  
  const setPlaced = () => {
    if (document.getElementById(id)) {
      placeElement = document.getElementById(id);
     }
  };
  
  const getPlaced = () => {
    return placeElement;
  };
  
  return {getElement, getData, setId, setPlaced, getPlaced};
};

export {
  eleM as
  default,
};
