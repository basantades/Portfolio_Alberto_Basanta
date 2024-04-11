const rootcss = document.getElementById('rootcss');
const iconoColor = document.getElementById('iconoColor');
function changeColor() {
    if (rootcss.getAttribute('href') === 'css/root.css') {
        rootcss.setAttribute('href', 'css/root2.css');
    } else {
        rootcss.setAttribute('href', 'css/root.css');
    }
}


iconoColor.addEventListener('click', changeColor)