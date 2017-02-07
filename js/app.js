var consulta = window.matchMedia('(max-width:800px)');
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById("menu");

function toggleMenu() {
  $menu.classList.toggle("active");
}

function showMenu() {
  $menu.classList.add("active");
}

function hideMenu() {
  $menu.classList.remove("active");
}

function mediaQuery() {
  if (consulta.matches) {
    $burguerButton.addEventListener('touchstart', toggleMenu)
  } else {
    $burguerButton.removeEventListener('touchstart', toggleMenu)
  }
}

mediaQuery();

var bLazy = new Blazy({
  selector: 'img'
});

//Gestos touch
var $body = document.body;
var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu)
  .on('swiperight', showMenu);
