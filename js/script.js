document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
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

  // Smooth scrolling for in-page links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
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

  // Initialize VanillaTilt on thumbnail elements
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".thumbnail"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }

  // Modal functionality: open modal on project card click
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      const modal = document.getElementById('modal-' + projectId);
      if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      }
    });
  });

  // Lightbox functionality for Akkodis GIFs
  const lightboxModal = document.getElementById('modal-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxImages = document.querySelectorAll('.lightbox-img');
  lightboxImages.forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      lightboxImg.src = this.src;
      lightboxModal.style.display = 'flex';
      setTimeout(() => {
        lightboxModal.classList.add('show');
      }, 10);
    });
  });
  if (lightboxClose) {
    lightboxClose.addEventListener('click', function(e) {
      lightboxModal.classList.remove('show');
      setTimeout(() => {
        lightboxModal.style.display = 'none';
      }, 300);
    });
  }
  // Close lightbox if clicked outside the image
  lightboxModal.addEventListener('click', function(e) {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('show');
      setTimeout(() => {
        lightboxModal.style.display = 'none';
      }, 300);
    }
  });

  // Close modals when clicking the close button or outside the modal content
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target.classList.contains('close') || e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }
    });
  });

  // Contact form submission – using mailto form action, so browser handles sending
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    // Let the mailto action open the user's email client.
  });
});
