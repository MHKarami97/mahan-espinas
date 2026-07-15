(function(){
  document.documentElement.setAttribute('data-theme','light');
  var btn = document.getElementById('navBurgerBtn');
  var header = document.querySelector('.site-header');
  if(btn && header){
    btn.addEventListener('click', function(){
      var open = header.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
