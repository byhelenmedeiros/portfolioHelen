//menu mobile

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

//header troca de texto 

document.addEventListener('DOMContentLoaded', function() {
  var frases = [
      'Eu sou Web Developer', 
      'Eu sou FrontEnd Developer', 
      'e também sou Web Designer', 
      'e apaixonada por tecnologia!'
  ];

  var elementoTexto = document.getElementById('texto-dinamico');
  var indiceFrase = 0;
  var indiceLetra = 0;
  var fraseAtual = '';
  var estaDigitando = true;

  function digitar() {
      if (estaDigitando) {
          if (indiceLetra < frases[indiceFrase].length) {
              fraseAtual += frases[indiceFrase].charAt(indiceLetra);
              elementoTexto.textContent = fraseAtual;
              indiceLetra++;
              setTimeout(digitar, 100); 
          } else {
              estaDigitando = false;
              setTimeout(digitar, 1000); 
          }
      } else {
          if (fraseAtual.length > 0) {
              fraseAtual = fraseAtual.substring(0, fraseAtual.length - 1);
              elementoTexto.textContent = fraseAtual;
              setTimeout(digitar, 100); 
          } else {
              estaDigitando = true;
              indiceFrase = (indiceFrase + 1) % frases.length;
              indiceLetra = 0;
              setTimeout(digitar, 500); 
          }
      }
  }

  digitar();
});


//popup 

document.getElementById('container__sobre-btnLerMais').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('btnFecharPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}

document.getElementById('container__sobre-btnProjetos').addEventListener('click', function() {
    window.location.href = '#projetos';
});
