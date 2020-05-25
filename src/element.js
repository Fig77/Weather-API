const element = (name='div', parentId='main', classlist='', twinbrothers='', id='', inner='') => {
  const getElement = () => {
    return document.createElement(name);
  }
  
  const getData = () => {
    return {name, parentId, classlist, twinbrothers, id, inner=''}
  }
  
  return {getElement, getData}
};