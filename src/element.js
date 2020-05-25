const eleM = (name='div', parentId='main', classlist='', twinbrothers='', id='', inner='') => {
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
  
  return {getElement, getData, setId};
};

export {
  eleM as
  default,
};
