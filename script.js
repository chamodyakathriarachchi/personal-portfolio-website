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
      // Remove active selector state from old buttons
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
  starBg.innerHTML = '';
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