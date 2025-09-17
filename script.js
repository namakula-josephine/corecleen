document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const ctaButton = document.getElementById("ctaButton")
  const modal = document.getElementById("quoteModal")
  const closeModal = document.getElementById("closeModal")
  const quoteForm = document.getElementById("quoteForm")
  const scrollToTopBtn = document.getElementById("scrollToTop")
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (ctaButton && modal && closeModal) {
    // Modal functionality
    ctaButton.addEventListener("click", () => {
      modal.classList.add("show")
      document.body.style.overflow = "hidden"
    })

    closeModal.addEventListener("click", () => {
      modal.classList.remove("show")
      document.body.style.overflow = "auto"
    })

    // Close modal when clicking outside
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show")
        document.body.style.overflow = "auto"
      }
    })
  }

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("show")) {
      modal.classList.remove("show")
      document.body.style.overflow = "auto"
    }
  })

  // Form submission
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(quoteForm)
      const data = Object.fromEntries(formData)

      // Simulate form submission
      alert("Thank you for your interest! We will contact you within 24 hours with your free quote.")

      // Reset form and close modal
      quoteForm.reset()
      if (modal) {
        modal.classList.remove("show")
        document.body.style.overflow = "auto"
      }
    })
  }

  // Scroll to top functionality
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("visible")
      } else {
        scrollToTopBtn.classList.remove("visible")
      }
    })

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerOffset = 70
        const elementPosition = target.offsetTop
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Animate elements on scroll (Bonus feature)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el)
  })

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Add active class styles for mobile menu
  const style = document.createElement("style")
  style.textContent = `
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex;
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background-color: #f1f5f9;
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            
            .nav-menu.active .nav-link {
                padding: 0.5rem 0;
                border-bottom: 1px solid #e2e8f0;
            }
        }
    `
  document.head.appendChild(style)

  // Add loading animation
  document.body.classList.add("loaded")
})
