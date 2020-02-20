let lastPage;

function getPageContentByHash(hash = window.location.hash) {
  if(hash === lastPage) {
    return;
  }

  switch(hash) {
    case "#legal-notice":
    case "#privacy":
      let page = hash.slice(1);
      setPageContent(`pages/${ page }.html`);
      break;
  
    default:
      if(window.location.hash !== "#start") {
        window.location.hash = "#start";
      }

      setPageContent("pages/start.html");
  }

  lastPage = hash;
}

function setPageContent(url) {
  fetch(url)
    .then(function(response) { return response.text(); })
    .then(function(content) { document.getElementsByTagName('main')[0].innerHTML = content; });
}
