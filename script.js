let currentPosition = 0;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const cardWidth = document.querySelector('.cardPrato').offsetWidth + 30; // Largura do card + margem
    const totalCards = document.querySelectorAll('.cardPrato').length;

    // Atualizar a posição do carrossel
    currentPosition += direction;

    // Limitar para não passar do primeiro ou último card
    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition > totalCards - 3) { // Ajuste o número para controlar quantos cards são visíveis de uma vez
        currentPosition = totalCards - 3;
    }

    // Mover o carrossel
    const offset = -currentPosition * cardWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
}
