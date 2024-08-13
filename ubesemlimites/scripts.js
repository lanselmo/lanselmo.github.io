document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
        });

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.opacity = '1';
        setTimeout(showSlides, 4000); // Muda a imagem a cada 4 segundos
    }

    showSlides();
});
