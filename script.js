document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.navbar__hamburguer');
  var closeButton = document.querySelector('.navbar__close');

  if (hamburger) {
      hamburger.addEventListener('click', function() {
          var menu = document.querySelector('.navbar__container-menu');
          if (menu) {
              menu.classList.toggle('active');
          }
      });
  }

  if (closeButton) {
      closeButton.addEventListener('click', function() {
          var menu = document.querySelector('.navbar__container-menu');
          if (menu) {
              menu.classList.remove('active');
          }
      });
  }
});
