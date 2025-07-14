      document.addEventListener("DOMContentLoaded", function () {
        ScrollReveal().reveal(".section-title", {
          delay: 200,
          duration: 800,
          distance: "20px",
          origin: "bottom",
          easing: "ease-in-out",
        });

        gsap.from(".hero__title", { opacity: 0, y: -50, duration: 1 });
        gsap.from(".hero__subtitle", { opacity: 0, y: 20, duration: 1, delay: 0.3 });
        gsap.from(".btn--primary", { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });
      });