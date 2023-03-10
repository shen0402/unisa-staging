document.querySelectorAll('header-menu details summary').forEach(summary =>{
    summary.addEventListener('mouseover', function(event){
      event.preventDefault();
      if(!event.target.closest('details').hasAttribute('open')) {
        const _summary = summary;
        document.querySelectorAll('details summary').forEach(item => {
          if (_summary != item && item.closest('details').hasAttribute('open')) {
            item.click();
          }
        });
        this.click();
        document.body.classList.add('megamenu-open');
      }
    });
});
  
document.querySelectorAll('header-menu .mega-menu__content').forEach(content => {
    content.addEventListener('mouseleave', function(event){
      event.preventDefault();
      event.target.closest('details').querySelector('summary').click();
      document.body.classList.remove('megamenu-open');
    });
});
  
document.querySelectorAll('.header__menu-item').forEach(item => {
    if (item.classList.contains('link--text')) {
      item.addEventListener('mouseover', function(event){
        event.preventDefault();
        document.querySelectorAll('details summary').forEach(item => {
          if (item.closest('details').hasAttribute('open')) {
            item.click();
          }
        });
        document.body.classList.remove('megamenu-open');
      });
    }
});