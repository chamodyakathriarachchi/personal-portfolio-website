const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.querySelector(".scroll-top-btn");

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", (event) => {
      event.preventDefault(); 
      
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileLinks = document.querySelectorAll('.mobile-links a');

function toggleMobileMenu() {
  mobileMenuToggle.classList.toggle('active');
  mobileNavOverlay.classList.toggle('open');
  document.body.classList.toggle('overflow-hidden');
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    mobileNavOverlay.classList.remove('open');
    document.body.classList.remove('overflow-hidden');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const skillItems = document.querySelectorAll(".skill-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      skillItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        
        if (filterValue === "all" || itemCategory === filterValue) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

const starBg = document.getElementById('starBackground');
function generateStars() {
  const existingStars = starBg.querySelectorAll('.star');
  existingStars.forEach(star => star.remove());
  
  const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.opacity = Math.random() * 0.5 + 0.5;
    star.style.animationDuration = (Math.random() * 4 + 2) + 's';
    starBg.appendChild(star);
  }
}
generateStars();
window.addEventListener('resize', generateStars);

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".skill-bar-fill");

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-now");
        observer.unobserve(entry.target);
      }
    });
  }, { 
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.01 
  });

  progressBars.forEach(bar => skillObserver.observe(bar));

  setTimeout(() => {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        bar.classList.add("animate-now");
      }
    });
  }, 200);

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      setTimeout(() => {
        const visibleBars = document.querySelectorAll(".skill-item[style*='block'] .skill-bar-fill, .skill-item:not([style*='none']) .skill-bar-fill");
        visibleBars.forEach(bar => bar.classList.add("animate-now"));
      }, 50);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalTargetImg");
  const closeBtn = document.querySelector(".modal-close");

  if (projectCards.length && modal && modalImg && closeBtn) {
    projectCards.forEach(card => {
      card.addEventListener("click", () => {
        const targetCardImg = card.querySelector(".project-image-wrapper img");
        if (targetCardImg) {
          modal.style.display = "block";
          modalImg.src = targetCardImg.src;
          modalImg.alt = targetCardImg.alt || "Project Preview";
          document.body.style.overflow = "hidden";
        }
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
});
