window.onload = () => {
  changeLinks();
  getPageContentByHash();
}

window.onhashchange = () => {
  getPageContentByHash();
};

document.getElementsByTagName('html')[0].onclick = (e) => {
  if(isElementContainedInValidParentElement(e.target)) {
    getPageContentByHash('#start');
  }
}

function isElementContainedInValidParentElement(element) {
  name = element.tagName;

  switch (name) {
    case "HTML":
    case "HEADER":
      return true;

    case "BODY":
    case "MAIN":
    case "FOOTER":
      return false;
  
    default:
      return isElementContainedInValidParentElement(element.parentNode);
  }
}
