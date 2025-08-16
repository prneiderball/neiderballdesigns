document.addEventListener("DOMContentLoaded", () => {
  // === NAV LINKS (global scope for smooth scroll & mobile nav) ===
  const navLinks = document.querySelectorAll(".nav__link");
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  // === PARTICLE SYSTEM ===
  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.reset();
    }
    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.01;
      if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
    }
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  class ParticleSystem {
    constructor(selector, numParticles = 100) {
      this.canvas = document.querySelector(selector);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.numParticles = numParticles;
      this.cellSize = 100;
      this.grid = {};

      this.resizeCanvas();
      this.initParticles();
      this.animate();

      window.addEventListener("resize", () => this.onResize());
    }
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    initParticles() {
      this.particles = [];
      for (let i = 0; i < this.numParticles; i++) {
        this.particles.push(new Particle(this.canvas));
      }
    }
    onResize() {
      this.resizeCanvas();
      this.initParticles();
    }
    updateSpatialGrid() {
      this.grid = {};
      for (let p of this.particles) {
        const cellX = Math.floor(p.x / this.cellSize);
        const cellY = Math.floor(p.y / this.cellSize);
        const key = `${cellX},${cellY}`;
        if (!this.grid[key]) this.grid[key] = [];
        this.grid[key].push(p);
      }
    }
    getNeighborParticles(cellX, cellY) {
      const neighbors = [];
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${cellX + dx},${cellY + dy}`;
          if (this.grid[key]) neighbors.push(...this.grid[key]);
        }
      }
      return neighbors;
    }
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.updateSpatialGrid();

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.update();
        p.draw();

        const cellX = Math.floor(p.x / this.cellSize);
        const cellY = Math.floor(p.y / this.cellSize);
        const neighbors = this.getNeighborParticles(cellX, cellY);

        for (let other of neighbors) {
          if (other === p) continue;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(212,175,55,${1 - distance / 100})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(other.x, other.y);
            this.ctx.stroke();
          }
        }

        if (p.size <= 0.2) {
          this.particles.splice(i, 1);
          this.particles.push(new Particle(this.canvas));
        }
      }

      requestAnimationFrame(() => this.animate());
    }
  }

  new ParticleSystem(".hero-canvas");

  // === ScrollReveal Animation ===
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".section-title", {
      delay: 400,
      duration: 1200,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
    });
  }

  // === GSAP Hero & Service Animations ===
  if (typeof gsap !== "undefined") {
    gsap.set(".hero__content", { zIndex: 2 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
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

    // Input focus effects
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

    // === Smooth Scroll Navigation ===
    navLinks.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");

        if (href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (!target) return;

          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: target, offsetY: 80 },
            onStart: () =>
              gsap.to(".header", { y: "-10px", duration: 0.5, ease: "power1.out" }),
            onComplete: () =>
              gsap.to(".header", { y: "0", duration: 0.5, ease: "power1.in" }),
          });
        }
      });
    });
  }

  // === Mobile Navigation Toggle ===
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
