document.addEventListener("DOMContentLoaded", () => {
  // === GLOBAL NAV ELEMENTS ===
  const navLinks = document.querySelectorAll(".nav__link");
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");


  // === ScrollReveal ===
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".section-title", {
      delay: 400,
      duration: 1200,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
    });
  }

  // === GSAP Animations ===
  if (typeof gsap !== "undefined") {
    gsap.set(".hero__content", { zIndex: 2 });

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(
      ".hero__title",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.5, ease: "elastic.out(1,0.5)" }
    )
      .fromTo(
        ".hero__subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=1"
      )
      .fromTo(
        ".btn--primary",
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)", delay: 0.2 },
        "-=0.5"
      )
      .to(
        ".hero__title",
        { textShadow: "0 0 40px rgba(0, 212, 255, 0.7)", duration: 1, yoyo: true, repeat: -1 },
        "-=0.5"
      );

    if (typeof ScrollTrigger !== "undefined") {
      gsap.utils.toArray(".service-card").forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () =>
            gsap.fromTo(
              card,
              { opacity: 0, rotationX: 90, y: 80 },
              { opacity: 1, rotationX: 0, y: 0, duration: 1.2, ease: "back.out(1.7)" }
            ),
        });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.1,
            rotationY: 10,
            boxShadow: "0 25px 60px rgba(0,212,255,0.5)",
            duration: 0.5,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            boxShadow: "0 20px 50px rgba(212,175,55,0.3)",
            duration: 0.5,
            ease: "power2.inOut",
          });
        });
      });
    }

    // Input focus
    const inputs = document.querySelectorAll(".contact__input, .contact__textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, {
          scale: 1.05,
          borderColor: "var(--highlight-color)",
          boxShadow: "0 0 25px rgba(0,212,255,0.6)",
          duration: 0.3,
        });
      });
      input.addEventListener("blur", () => {
        gsap.to(input, {
          scale: 1,
          borderColor: "rgba(212,175,55,0.3)",
          boxShadow: "none",
          duration: 0.3,
        });
      });
    });

    // === Smooth Scroll using ScrollToPlugin ===
    if (typeof ScrollToPlugin !== "undefined") {
      navLinks.forEach((anchor) => {
        const href = anchor.getAttribute("href");
        if (!href.startsWith("#")) return;

        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(href);
          if (!target) return;

          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: target, offsetY: 80 },
            ease: "power2.out",
          });
        });
      });
    }
  }

  // === Mobile Nav Toggle ===
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
