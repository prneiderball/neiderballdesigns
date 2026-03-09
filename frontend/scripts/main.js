document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     NAVIGATION ELEMENTS
  ========================= */

  const navLinks = document.querySelectorAll(".nav__link");
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  /* =========================
     HERO ANIMATION
  ========================= */

  if (typeof gsap !== "undefined") {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero__title", {
      opacity: 0,
      y: 50,
      duration: 1
    })
      .from(
        ".hero__subtitle",
        {
          opacity: 0,
          y: 30,
          duration: 0.8
        },
        "-=0.6"
      )
      .from(
        ".btn--primary",
        {
          opacity: 0,
          y: 20,
          duration: 0.6
        },
        "-=0.5"
      );
  }

  /* =========================
     SECTION REVEAL
  ========================= */

  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".section-title, .service-card, .about__text", {
      delay: 200,
      duration: 900,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
      interval: 120
    });
  }

  /* =========================
     SMOOTH SCROLL
  ========================= */

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href.startsWith("#")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(href);

      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    });
  });

  /* =========================
     MOBILE NAV TOGGLE
  ========================= */

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("open");
      navToggle.classList.toggle("nav__toggle--open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        navToggle.classList.remove("nav__toggle--open");
      });
    });
  }
});
