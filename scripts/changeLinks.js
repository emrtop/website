function changeLinks() {
  const links = document.getElementsByClassName('footer-list__item');
  
  for (let i = 0; i < links.length; i++) {
    const link = links[i].firstElementChild;

    link.href = link.dataset.content;
    link.removeAttribute('data-content');

    link.onclick = function() {
      if(link.hash === lastPage) {
        return;
      }

      getPageContentByHash(link.hash);
    };
    
    link.onkeyup = function(e) {
      let key = e.key;
      
      if(key === 'Enter' || key === ' ') {
        e.preventDefault();
        e.currentTarget.click();
      }
    };
  }
}
