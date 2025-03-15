document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 800,
    easing: "slide",
    once: true,
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Initialize VanillaTilt on thumbnails
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".thumbnail"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }

  // Modal: Open on project card click
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project-id");
      const modal = document.getElementById(`modal-${projectId}`);
      if (modal) {
        modal.style.display = "flex";
        setTimeout(() => {
          modal.classList.add("show");
        }, 10);
      }
    });
  });

  // Close modals
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target.classList.contains("close") || e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    });
  });

  // Lightbox for Akkodis GIFs
  const lightboxModal = document.getElementById("modal-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxImages = document.querySelectorAll(".lightbox-img");

  lightboxImages.forEach(img => {
    img.addEventListener("click", e => {
      e.stopPropagation();
      lightboxImg.src = img.src;
      lightboxModal.style.display = "flex";
      setTimeout(() => {
        lightboxModal.classList.add("show");
      }, 10);
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightboxModal.classList.remove("show");
    setTimeout(() => {
      lightboxModal.style.display = "none";
    }, 300);
  });

  lightboxModal.addEventListener("click", e => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove("show");
      setTimeout(() => {
        lightboxModal.style.display = "none";
      }, 300);
    }
  });

  // Typewriter effect in hero
  const typewriterElement = document.getElementById("typewriter");
  const textArray = [
    "Hi, I'm Kshitij",
    "Building the Future of Mobility"
  ];
  let arrayIndex = 0;
  let charIndex = 0;
  let currentText = "";

  function type() {
    if (arrayIndex < textArray.length) {
      currentText = textArray[arrayIndex];
      typewriterElement.innerHTML = currentText.slice(0, charIndex) + "|";
      charIndex++;
      if (charIndex <= currentText.length) {
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          remove();
        }, 1000);
      }
    }
  }

  function remove() {
    if (charIndex >= 0) {
      typewriterElement.innerHTML = currentText.slice(0, charIndex) + "|";
      charIndex--;
      setTimeout(remove, 50);
    } else {
      arrayIndex++;
      if (arrayIndex >= textArray.length) arrayIndex = 0;
      setTimeout(type, 300);
    }
  }

  // Start typewriter effect
  setTimeout(type, 1000);

  // Contact form submission – mailto form action
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function(e) {
    // Let the mailto action open the user's email client
  });
});
