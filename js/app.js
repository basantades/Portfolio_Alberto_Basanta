const rootcss = document.getElementById('rootcss');
const iconoColor = document.getElementById('iconoColor');
function changeColor() {
    if (rootcss.getAttribute('href') === 'css/root.css') {
        rootcss.setAttribute('href', 'css/root2.css');
    } else {
        rootcss.setAttribute('href', 'css/root.css');
    }
}
iconoColor.addEventListener('click', changeColor);

const iconoLight = document.getElementById('iconoLight');
const iconoDark = document.getElementById('iconoDark');
const html = document.querySelector('html');

function changeTheme() {
    if (html.getAttribute('class') === 'light') {
        html.setAttribute('class', 'dark');
        iconoDark.classList.add('ocultar');
        iconoLight.classList.remove('ocultar');
    } else {
        html.setAttribute('class', 'light');
        iconoLight.classList.add('ocultar');
        iconoDark.classList.remove('ocultar');
    }
}
iconoLight.addEventListener('click', changeTheme);
iconoDark.addEventListener('click', changeTheme);