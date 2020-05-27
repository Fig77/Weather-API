const eleM = (name = 'div', parentId = 'main', classlist = '', id = '', twinbrothers = 0, inner = '') => {
  let placeElement = twinbrothers === 0 ? null : [];

  const getElement = () => {
    const tempElement = document.createElement(name);
    tempElement.classList = classlist;
    tempElement.id = id;
    tempElement.innerHTML = inner;
    return tempElement;
  };

  // Sets

  const setId = (newId) => {
    id = newId;
  };

  const setInner = (text) => {
    inner = text;
  };

  const setPlaced = () => {
    if (document.getElementById(id)) {
      if (twinbrothers === 0) {
        placeElement = document.getElementById(id);
      } else {
        placeElement.push(document.getElementById(id));
      }
    }
  };

  // gets

  const getData = () => ({
    name,
    parentId,
    classlist,
    id,
    twinbrothers,
    inner,
  });

  const getPlaced = () => placeElement;

  return {
    getElement,
    getData,
    setId,
    setPlaced,
    getPlaced,
    setInner,
  };
};

export {
  eleM as
  default,
};