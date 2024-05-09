// Espera a que el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces del menú y las secciones
    const menuLinks = document.querySelectorAll('nav .menu a');
    const sections = document.querySelectorAll('section');
  
    // Función para remover la clase 'active' de todos los enlaces del menú
    function clearMenu() {
      menuLinks.forEach(link => {
        link.classList.remove('active');
      });
    }
  
    // Función para activar el enlace del menú basado en el desplazamiento actual
    function activateMenuLink() {
      let currentActiveIndex = -1;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 2)) {
          currentActiveIndex = index;
        }
      });
  
      // Si hay una sección activa, añade la clase 'active'
      if (currentActiveIndex !== -1) {
        clearMenu();
        menuLinks[currentActiveIndex].classList.add('active');
      }
    }
  
    // Añade un 'event listener' para el evento de desplazamiento
    window.addEventListener('scroll', activateMenuLink);
  });
  