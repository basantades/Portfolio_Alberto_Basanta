// Seleccionamos todos los carruseles
let carruseles = document.querySelectorAll(".carrusel");

// Función para añadir los eventos a cada carrusel
function addCarouselEvents(carrusel) {
    let interiorCarrusel = carrusel.querySelector(".interiorCarrusel");
    let pressed = false;
    let startX;
    let x;

    // Eventos para mouse
    carrusel.addEventListener("mousedown", (e) => {
        pressed = true;
        startX = e.offsetX - interiorCarrusel.offsetLeft;
        carrusel.style.cursor = "grabbing";
    });

    carrusel.addEventListener("mouseenter", () => {
        carrusel.style.cursor = "grab";
    });

    carrusel.addEventListener("mouseup", () => {
        carrusel.style.cursor = "grab";
        pressed = false;
    });

    carrusel.addEventListener("mousemove", (e) => {
        if (!pressed) return;
        e.preventDefault();

        x = e.offsetX;
        interiorCarrusel.style.left = `${x - startX}px`;
        boundItems(interiorCarrusel, carrusel);
    });

    // Eventos para táctil
    carrusel.addEventListener("touchstart", (e) => {
        pressed = true;
        startX = e.touches[0].clientX - interiorCarrusel.offsetLeft;
        carrusel.style.cursor = "grabbing";
    });

    carrusel.addEventListener("touchend", () => {
        carrusel.style.cursor = "grab";
        pressed = false;
    });

    carrusel.addEventListener("touchmove", (e) => {
        if (!pressed) return;
        e.preventDefault();

        x = e.touches[0].clientX;
        interiorCarrusel.style.left = `${x - startX}px`;
        boundItems(interiorCarrusel, carrusel);
    });

    // Función para establecer los límites
    function boundItems(interior, outer) {
        let outerRect = outer.getBoundingClientRect();
        let innerRect = interior.getBoundingClientRect();

        if (parseInt(interior.style.left) > 0) {
            interior.style.left = "0px";
        }

        if (innerRect.right < outerRect.right) {
            interior.style.left = `-${innerRect.width - outerRect.width}px`;
        }
    }
}

// Añadimos los eventos a cada carrusel
carruseles.forEach(addCarouselEvents);
