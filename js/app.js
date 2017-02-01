var consulta = window.matchMedia('(max-width:800px)');
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById("menu");

function toggleMenu() {
  $menu.classList.toggle("active");
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
