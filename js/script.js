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

  // Smooth scrolling for in-page links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Initialize VanillaTilt on all thumbnails for 3D hover effect
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".thumbnail"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }

  // Modal functionality
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      const modal = document.getElementById('modal-' + projectId);
      if (modal) {
        modal.style.display = 'flex';
        // Allow a slight delay so CSS transitions can run
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      }
    });
  });

  // Close modals when clicking the close button or outside the modal content
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target.classList.contains('close') || e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300); // Wait for transition to finish
      }
    });
  });

  // Contact form submission (demo only)
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
  });
});
