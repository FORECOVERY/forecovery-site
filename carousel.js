let currentIndex = 0;

function moveCarousel(direction) {
  const carouselContent = document.querySelector(".carousel-content");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carouselContent.style.transform = `translateX(${offset}%)`;
}
