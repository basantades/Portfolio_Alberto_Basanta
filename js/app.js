// Nodos para cambio de root
const rootcss = document.getElementById("rootcss");
const iconoColor = document.getElementById("iconoColor");
let punto1 = document.querySelector(".punto1");
let punto2 = document.querySelector(".punto2");
let punto3 = document.querySelector(".punto3");
let punto4 = document.querySelector(".punto4");
let textoHero = document.querySelector(".textHero");
const contenidoTextoHero = textoHero.innerHTML;

// Funcion para cambio de root
function changeColor() {
  if (rootcss.getAttribute("href") === "css/root2.css") {
    rootcss.setAttribute("href", "css/root3.css");
    punto2.classList.remove("actual");
    punto3.classList.add("actual");
  } else if (rootcss.getAttribute("href") === "css/root3.css") {
    rootcss.setAttribute("href", "css/root4.css");
    punto3.classList.remove("actual");
    punto4.classList.add("actual");
  } else if (rootcss.getAttribute("href") === "css/root4.css") {
    rootcss.setAttribute("href", "css/root.css");
    punto4.classList.remove("actual");
    punto1.classList.add("actual");
  } else {
    rootcss.setAttribute("href", "css/root2.css");
    punto1.classList.remove("actual");
    punto2.classList.add("actual");
  }
  textoHero.innerHTML = "";
  textoHero.innerHTML = contenidoTextoHero;
}

// Event listener para cambio de root
iconoColor.addEventListener("click", changeColor);

// Nodos para cambio claro-oscuro
const iconoLight = document.getElementById("iconoLight");
const iconoDark = document.getElementById("iconoDark");
const html = document.querySelector("html");

// funcion para cambio claro-oscuro
function changeTheme() {
  if (html.getAttribute("class") === "dark") {
    html.setAttribute("class", "light");
    iconoLight.classList.add("ocultar");
    iconoDark.classList.remove("ocultar");
  } else {
    html.setAttribute("class", "dark");
    iconoDark.classList.add("ocultar");
    iconoLight.classList.remove("ocultar");
  }
  textoHero.innerHTML = "";
  textoHero.innerHTML = contenidoTextoHero;
}

// Event listener para cambio claro-oscuro
iconoLight.addEventListener("click", changeTheme);
iconoDark.addEventListener("click", changeTheme);

// Nodos para cambio menu movil
let iconoMenu = document.getElementById("iconoMenu");
let iconoMenuClose = document.getElementById("iconoMenuClose");
let desplegableMenu = document.getElementById("desplegableMenu");

// Funcion para abrir menu
function abrirMenu() {
  desplegableMenu.classList.remove("ocultar");
  desplegableMenu.classList.remove("animacionEsconderMenu");
  desplegableMenu.classList.add("animacionAparecerMenu");
  iconoMenu.classList.add("ocultar");
  iconoMenuClose.classList.remove("ocultar");
}
function cerrarMenu() {
  desplegableMenu.classList.remove("animacionAparecerMenu");
  desplegableMenu.classList.add("animacionEsconderMenu");
  iconoMenu.classList.remove("ocultar");
  iconoMenuClose.classList.add("ocultar");
  setTimeout(() => {
    desplegableMenu.classList.add("ocultar");
}, 400);
}

// Event listener para abrir y cerrar menu
iconoMenu.addEventListener("click", abrirMenu);
iconoMenuClose.addEventListener("click", cerrarMenu);

window.addEventListener("scroll", () => {
  cerrarMenu();
});

// Nodos desplegable
const linkDesplegable = document.getElementById("linkDesplegable");
const desplegable = document.getElementById("desplegable");
const iconoDesplegable = document.getElementById("iconoDesplegable");

// funcion para desplegable
function desplegarAficiones() {
  if (desplegable.getAttribute("class") === "ocultar") {
    desplegable.classList.remove("ocultar");
    iconoDesplegable.classList.remove("rotado");
  } else {
    desplegable.classList.add("ocultar");
    iconoDesplegable.classList.add("rotado");
  }
}

// Event listener desplegable
linkDesplegable.addEventListener("click", desplegarAficiones);
