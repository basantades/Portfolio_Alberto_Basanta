const rootcss = document.getElementById('rootcss');
const iconoColor = document.getElementById('iconoColor');
let punto1 = document.querySelector('.punto1');
let punto2 = document.querySelector('.punto2');
let punto3 = document.querySelector('.punto3');
let punto4 = document.querySelector('.punto4');
function changeColor() {
    if (rootcss.getAttribute('href') === 'css/root.css' || rootcss.getAttribute('href') === "css/root.css") {
        rootcss.setAttribute('href', 'css/root2.css');
        punto1.classList.remove('actual');
        punto2.classList.add('actual');
    } else if (rootcss.getAttribute('href') === 'css/root2.css') {
        rootcss.setAttribute('href', 'css/root3.css');
        punto2.classList.remove('actual');
        punto3.classList.add('actual');
    } else if (rootcss.getAttribute('href') === 'css/root3.css') {
        rootcss.setAttribute('href', 'css/root4.css');
        punto3.classList.remove('actual');
        punto4.classList.add('actual');
    }
    else {
        rootcss.setAttribute('href', 'css/root.css');
        punto4.classList.remove('actual');
        punto1.classList.add('actual');
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
