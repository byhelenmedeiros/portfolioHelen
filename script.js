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


//skills//

document.addEventListener("DOMContentLoaded", function() {
    const showTextElement = document.getElementById("showtext");

    document.getElementById("htmlCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "HTML: Mais de 5 anos de experiência, desenvolvendo websites e aplicativos web responsivos.";
    });

    document.getElementById("cssCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "CSS: 5 anos de experiência, especialização em Flexbox e Grid para layouts complexos e design adaptativo.";
    });

    document.getElementById("jsCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "JavaScript: 2 anos de experiência, criando interações dinâmicas, SPAs com React e backend com Node.js.";
    });

    document.getElementById("javaCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "Java: Conhecimentos em projectos académicos e projectos pessoais.";
    });

    document.getElementById("wordpressCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "WordPress: 6 anos de experiência, criando e gerenciando sites, com habilidades em personalização de temas e plugins.";
    });

    document.getElementById("phpCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "PHP: 1 anos de experiência, desenvolvendo sites dinâmicos e aplicações web complexas.";
    });

    document.getElementById("mysqlCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "MySQL: 1 anos de experiência, projetando e otimizando bancos de dados relacionais para aplicações web de alta performance.";
    });

    document.getElementById("figmaCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "Figma: 2 anos de experiência, utilizando para design UI/UX, prototipação de aplicativos e colaboração em equipe.";
    });

    document.getElementById("elementorCard").addEventListener("mouseover", function() {
        showTextElement.innerHTML = "Elementor: 6 anos de experiência, criando sites visualmente atraentes e altamente personalizados em WordPress.";
    });
});
