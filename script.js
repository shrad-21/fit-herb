// Scroll Progress
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
});

// IntersectionObserver for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(".problem-card, .product-card, .why-card, .fade-up")
  .forEach((el) => {
    observer.observe(el);
  });

// Staggered delays for cards
document.querySelectorAll(".problem-card").forEach((card, i) => {
  card.style.transitionDelay = i * 0.15 + "s";
});
document.querySelectorAll(".product-card").forEach((card, i) => {
  card.style.transitionDelay = i * 0.15 + "s";
});
document.querySelectorAll(".why-card").forEach((card, i) => {
  card.style.transitionDelay = i * 0.1 + "s";
});

// Parallax on hero background text
window.addEventListener("scroll", () => {
  const heroText = document.querySelector(".hero-bg-text");
  if (heroText) {
    heroText.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.3}px))`;
  }
});

// Active nav link highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--teal)" : "";
  });
});

const searchBtn = document.querySelector(".search-btn");
const searchWrapper = document.querySelector(".search-wrapper");

searchBtn.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");
});
