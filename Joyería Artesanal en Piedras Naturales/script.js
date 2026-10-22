// Variable para controlar la diapositiva actual
let currentSlide = 0;
let slideInterval;

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
    startAutoSlide();
});

// Muestra una diapositiva específica por su índice
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    // Normalizar el índice dentro del rango de slides disponibles
    if (index >= slides.length) { currentSlide = 0; }
    else if (index < 0) { currentSlide = slides.length - 1; }
    else { currentSlide = index; }

    // Ocultar todas las diapositivas
    slides.forEach(slide => slide.style.display = "none");

    // Mostrar la diapositiva seleccionada
    slides[currentSlide].style.display = "block";
}

// Avanzar o retroceder diapositivas desde los botones HTML
function plusSlides(n) {
    showSlide(currentSlide + n);
    resetAutoSlide(); // Reinicia el temporizador al interactuar manualmente
}

// Iniciar el temporizador automático cada 5 segundos
function startAutoSlide() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Reiniciar el temporizador para evitar saltos caóticos
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Validación interactiva del formulario de contacto sin recarga de página
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.');
        contactForm.reset();
    });
}

