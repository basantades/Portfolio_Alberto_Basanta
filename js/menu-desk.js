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
          const sectionBottom = sectionTop + sectionHeight;
          const viewportHeight = window.innerHeight;

   // Verifica si el usuario ve más del 50% de la sección actual
   if (window.scrollY >= sectionTop - viewportHeight / 2 && window.scrollY < sectionBottom) {
    currentActiveIndex = index;
}
});
      clearMenu();
      // Si hay una sección activa, añade la clase 'active'
      if (currentActiveIndex !== -1) {
        menuLinks[currentActiveIndex].classList.add('active');
    }
}
  
    // Añade un 'event listener' para el evento de desplazamiento
    window.addEventListener('scroll', activateMenuLink);
  });
  