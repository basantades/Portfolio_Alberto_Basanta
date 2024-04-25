const rootcss = document.getElementById('rootcss');
const iconoColor = document.getElementById('iconoColor');
let punto1 = document.querySelector('.punto1');
let punto2 = document.querySelector('.punto2');
let punto3 = document.querySelector('.punto3');
let punto4 = document.querySelector('.punto4');
function changeColor() {
    if (rootcss.getAttribute('href') === 'css/root2.css') {
        rootcss.setAttribute('href', 'css/root3.css');
        punto2.classList.remove('actual');
        punto3.classList.add('actual');
    } else if (rootcss.getAttribute('href') === 'css/root3.css') {
        rootcss.setAttribute('href', 'css/root4.css');
        punto3.classList.remove('actual');
        punto4.classList.add('actual');
    } else if (rootcss.getAttribute('href') === 'css/root4.css') {
        rootcss.setAttribute('href', 'css/root.css');
        punto4.classList.remove('actual');
        punto1.classList.add('actual');
    }
    else {
        rootcss.setAttribute('href', 'css/root2.css');
        punto1.classList.remove('actual');
        punto2.classList.add('actual');
    }
}
iconoColor.addEventListener('click', changeColor);

const iconoLight = document.getElementById('iconoLight');
const iconoDark = document.getElementById('iconoDark');
const html = document.querySelector('html');

function changeTheme() {
    if (html.getAttribute('class') === 'dark') {
        html.setAttribute('class', 'light');
        iconoLight.classList.add('ocultar');
        iconoDark.classList.remove('ocultar');
    } else {
        html.setAttribute('class', 'dark');
        iconoDark.classList.add('ocultar');
        iconoLight.classList.remove('ocultar');
    }
}
iconoLight.addEventListener('click', changeTheme);
iconoDark.addEventListener('click', changeTheme);











// Maneja el evento mousemove en el contenedor de parallax
document.querySelector('.parallax').addEventListener('mousemove', function(e) {
    // Calcula la posición del ratón dentro del contenedor
    var mouseX = e.clientX - this.offsetLeft;
    var mouseY = e.clientY - this.offsetTop;
    
    // Calcula los desplazamientos para cada imagen
    var offsetX = (mouseX - (this.offsetWidth / 2)) / this.offsetWidth * 20;
    var offsetY = (mouseY - (this.offsetHeight / 2)) / this.offsetHeight * 40;
    
    // Aplica los desplazamientos a cada imagen con un efecto de transición suave
    imgpara2.style.transform = 'translate(' + offsetX * 0.6 + 'px, ' + offsetY * 0.1 + 'px)';
    imgpara3.style.transform = 'translate(' + offsetX * 0.4 + 'px, ' + offsetY * 0.2 + 'px)';
    imgpara4.style.transform = 'translate(' + offsetX * 0.9 + 'px, ' + offsetY * 0.3 + 'px)';
    imgpara5.style.transform = 'translate(' + offsetX * 0.6 + 'px, ' + offsetY * 0.1 + 'px)';
    imgpara6.style.transform = 'translate(' + offsetX * 0.4 + 'px, ' + offsetY * 0.2 + 'px)';
    imgpara7.style.transform = 'translate(' + offsetX * 0.3 + 'px, ' + offsetY * 0.3 + 'px)';
    imgpara8.style.transform = 'translate(' + offsetX * 3 + 'px, ' + offsetY * 0.1 + 'px)';
    imgpara9.style.transform = 'translate(' + offsetX * 1 + 'px, ' + offsetY * 0.2 + 'px)';
    imgpara10.style.transform = 'translate(' + offsetX * 5 + 'px, ' + offsetY * 0.3 + 'px)';
    imgpara11.style.transform = 'translate(' + offsetX * 7 + 'px, ' + offsetY * 0.1 + 'px)';
    imgpara12.style.transform = 'translate(' + offsetX * 5 + 'px, ' + offsetY * 0.2 + 'px)';
    imgpara13.style.transform = 'translate(' + offsetX * 2 + 'px, ' + offsetY * 0.3 + 'px)';
    imgpara14.style.transform = 'translate(' + offsetX * 1 + 'px, ' + offsetY * 0.3 + 'px)';
  
  
    // Y así sucesivamente para cada imagen, ajustando los valores de offsetX y offsetY según sea necesario
  
    // Modifica el margen izquierdo de la imagen 5
    // imgpara5.style.marginLeft = offsetX * 2 + 'px';
  }); 