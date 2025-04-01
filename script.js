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

document.addEventListener("DOMContentLoaded", function () {
  // Create modal elements
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeButton = document.createElement("button");
  closeButton.className = "modal-close";
  closeButton.innerHTML = "&times;";

  const modalTitle = document.createElement("h3");
  modalTitle.className = "modal-title";

  const modalText = document.createElement("div");
  modalText.className = "modal-text";

  // Build modal structure
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalText);
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Close modal function
  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }

  // Close modal when clicking X or overlay
  closeButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Handle all "Find Out More" clicks
  document.querySelectorAll(".editor").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the card title
      const cardTitle =
        this.closest(".card-item").querySelector("h3").textContent;

      // Set modal content based on which card was clicked
      modalTitle.textContent = cardTitle;

      // Set the appropriate content for each program
      if (cardTitle === "Tranquil Home") {
        modalText.innerHTML = `
          <p>Through our Tranquil Homes situated in Kajjansi on Entebbe road, we offer comprehensive in-patient and out-patient care tailored to individuals struggling with various mental health challenges such as; substance use disorders/addiction, and trauma among others, as well as support for gender-based violence survivors, neonatal depression management and interventions for suicidal ideation.</p>
          <p>We are dedicated to creating an environment where every individual feels valued, understood, and capable of change. Our qualified and compassionate team, combined with a robust follow-up program, ensures holistic healing as we walk alongside our clients every step of the way. With a steadfast commitment to affordability, we make recovery accessible to all who seek it, ensuring that no one is left behind.</p>
          <p><strong>Conditions we Address:</strong></p>
          <ul>
            <li>Anxiety Disorders</li>
            <li>Depression (Sadness, Hopelessness, Forgetfulness, Poor Concentration)</li>
            <li>Severe Mental Illness (Psychosis, Bi-Polar Illness)</li>
            <li>Suicidal Thoughts/Feelings</li>
            <li>Relationship Problems</li>
            <li>Educational Challenges</li>
            <li>Substance Use Disorders (Alcohol and Other Drugs Dependence)</li>
          </ul>
        `;
      } else if (cardTitle === "Recovery Walk") {
        modalText.innerHTML = `
          <p>FORE-Uganda convenes the Annual Recovery Walk aimed at fostering national awareness on alcohol, drugs and substance abuse in Uganda</p>
           <p>The walk brings together individuals in recovery, families, youth, community leaders, health professionals and policymakers to promote prevention, rehabilitation, and social reintegration. </p>
          
        
          
        `;
      } else if (cardTitle === "Recovery Magazine") {
        modalText.innerHTML = `
          <img src="images/homeimages/recoverymagazine.png" width="300" height="400">

          <p>Featuring firsthand accounts of people and families that have overcome addiction, their struggles, triumphs and lessons learned, FORE publishes a quarterly magazine aimed at debunking myths about addiction and recovery. The magazine also highlights insights from health professionals, mental health tips and resource links and hotline numbers for immediate help and counselling services.
</p>
        `;
      } else if (cardTitle === "Recovery Room") {
        modalText.innerHTML = `
            <p>This is a transformative podcast dedicated to open, honest and stigma-free discussions about addiction, mental health and recovery. </p>
             <P>Employee Assistance Programs (EAPs)
FORE's Employee Assistance Programs (EAPs) provide comprehensive support for employees' mental health and wellbeing. Our EAPs offer confidential counseling services, stress management, and work-life balance solutions, all designed to promote employee resilience and performance. With a team of experienced mental health professionals, we provide personalised support for employees navigating life's challenges, from anxiety and depression to relationship issues and career development. By investing in our employees' mental health, we foster a culture of care, empathy, and productivity, empowering them to thrive both personally and professionally.
</p>
        `;
      }

      // Show modal
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    });
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("next-button");
  const mainContainer = document.querySelector(
    ".inner-blog-video-maincontainer"
  );
  const minorContainer = document.querySelector(
    ".inner-blog-video-minorcontainer"
  );

  nextButton.addEventListener("click", function () {
    // Toggle the classes between containers
    [mainContainer.classList, minorContainer.classList].forEach((classList) => {
      classList.toggle("inner-blog-video-maincontainer");
      classList.toggle("inner-blog-video-minorcontainer");
    });

    // No need to swap DOM positions because CSS handles the layout
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Create popup elements
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";

  const popup = document.createElement("div");
  popup.className = "donation-popup";
  popup.innerHTML = `
    <button class="popup-close">&times;</button>
    <h3>Donation Information</h3>
    <p><strong>GENERAL DETAILS</strong></p>
    <p><strong>Bank Information</strong></p>
    <ul>
      <li><strong>Bank:</strong> Diamond Trust</li>
      <li><strong>Account Name:</strong> Focus on Recovery (U) Ltd</li>
      <li><strong>Account Number:</strong> 0084673001</li>
    </ul>
    <p><strong>Contact Information</strong></p>
    <ul>
      <li><strong>Phone:</strong> +256 755 083 017, +256 773 001 684</li>
      <li><strong>Email:</strong> irecover@recoveryuganda.com</li>
    </ul>
  `;

  // Add to DOM
  document.body.appendChild(overlay);
  document.body.appendChild(popup);

  // Get donate button (using your existing structure)
  const donateBtn = document.querySelector(".nav-donate-container a");

  // Click handlers
  donateBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close handlers
  overlay.addEventListener("click", closePopup);
  document.querySelector(".popup-close").addEventListener("click", closePopup);

  // Close with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup.classList.contains("active")) {
      closePopup();
    }
  });

  function closePopup() {
    popup.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
