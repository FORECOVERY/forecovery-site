document.addEventListener("DOMContentLoaded", function () {
  const numbersSection = document.getElementById("numbers");
  const numberElements = document.querySelectorAll(".number span");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start counting for each number
        numberElements.forEach((numberElement) => {
          const targetNumber = parseInt(numberElement.textContent, 10);
          animateNumber(numberElement, targetNumber);
        });

        // Stop observing after the animation starts
        observer.unobserve(numbersSection);
      }
    });
  }, observerOptions);

  // Start observing the numbers section
  observer.observe(numbersSection);

  function animateNumber(element, targetNumber) {
    let currentNumber = 0;
    const duration = 2000; // Animation duration in milliseconds
    const increment = targetNumber / (duration / 16); // 16ms per frame

    const updateNumber = () => {
      currentNumber += increment;
      if (currentNumber < targetNumber) {
        element.textContent = Math.ceil(currentNumber);
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = targetNumber; // Ensure the final number is exact
      }
    };

    updateNumber();
  }
});

// let currentIndex = 0;

// function moveCarousel(direction) {
//   const carouselContent = document.querySelector(".carousel-content");
//   const items = document.querySelectorAll(".carousel-item");
//   const totalItems = items.length;

//   currentIndex += direction;

//   if (currentIndex < 0) {
//     currentIndex = totalItems - 1;
//   } else if (currentIndex >= totalItems) {
//     currentIndex = 0;
//   }

//   const offset = -currentIndex * 100;
//   carouselContent.style.transform = `translateX(${offset}%)`;
// }

let currentIndex = 0;

function moveCarousel(direction) {
  const carouselContent = document.querySelector(".carousel-content");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  // Update the current index
  currentIndex += direction;

  // Loop back to the last slide if at the first slide and moving left
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  // Loop back to the first slide if at the last slide and moving right
  else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  // Calculate the offset and move the carousel
  const offset = -currentIndex * 100;
  carouselContent.style.transform = `translateX(${offset}%)`;
}

let currentIndex1 = 0;

function moveCarousel1(direction) {
  const carouselContent = document.querySelector(".carousel-content1");
  const items = document.querySelectorAll(".carousel-item1");
  const totalItems = items.length;

  // Update the current index
  currentIndex1 += direction;

  // Loop back to the last slide if at the first slide and mov0ing left
  if (currentIndex1 < 0) {
    currentIndex = totalItems - 1;
  }
  // Loop back to the first slide if at the last slide and moving right
  else if (currentIndex1 >= totalItems) {
    currentIndex1 = 0;
  }

  // Calculate the offset and move the carousel
  const offset = -currentIndex1 * 100;
  carouselContent.style.transform = `translateX(${offset}%)`;
}

// navigation

function toggleMenu() {
  const menu = document.querySelector(".navbar .menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// mobile slider
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".card-list");

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
  });
});
