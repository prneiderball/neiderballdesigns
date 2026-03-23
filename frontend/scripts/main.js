document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     CONSTANTS
  ========================= */

  const HEADER = document.querySelector(".header");
  const HEADER_H = HEADER ? HEADER.offsetHeight : 68;

  /* =========================
     NAVIGATION
  ========================= */

  const navLinks = document.querySelectorAll(".nav__link");
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  /* ── Header scroll state ── */
  const onScroll = () => {
    if (!HEADER) return;
    if (window.scrollY > 12) {
      HEADER.classList.add("header--scrolled");
    } else {
      HEADER.classList.remove("header--scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Active section highlighting ── */
  const sections = document.querySelectorAll("section[id]");

  const highlightNav = () => {
    const scrollMid = window.scrollY + window.innerHeight / 3;

    sections.forEach((sec) => {
      const link = document.querySelector(`.nav__link[href="#${sec.id}"]`);
      if (!link) return;
      const inView =
        scrollMid >= sec.offsetTop &&
        scrollMid < sec.offsetTop + sec.offsetHeight;
      link.classList.toggle("nav__link--active", inView);
    });
  };

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  /* ── Smooth scroll (respects live header height) ── */
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    link.addEventListener("click", (e) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const liveHeaderH = HEADER ? HEADER.offsetHeight : HEADER_H;
      const position =
        target.getBoundingClientRect().top + window.pageYOffset - liveHeaderH;

      window.scrollTo({ top: position, behavior: "smooth" });
    });
  });

  /* ── Mobile nav ── */
  if (navToggle && navList) {
    const closeMenu = () => {
      navList.classList.remove("open");
      navToggle.classList.remove("nav__toggle--open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    const openMenu = () => {
      navList.classList.add("open");
      navToggle.classList.add("nav__toggle--open");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    navToggle.addEventListener("click", () => {
      navList.classList.contains("open") ? closeMenu() : openMenu();
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("click", (e) => {
      if (
        navList.classList.contains("open") &&
        !navList.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* =========================
     HERO ENTRANCE
  ========================= */

  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(
      typeof ScrollTrigger !== "undefined" ? ScrollTrigger : {}
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero__eyebrow", {
      opacity: 0,
      y: 16,
      duration: 0.6
    })
      .from(
        ".hero__title",
        {
          opacity: 0,
          y: 48,
          duration: 1
        },
        "-=0.3"
      )
      .from(
        ".hero__subtitle",
        {
          opacity: 0,
          y: 28,
          duration: 0.8
        },
        "-=0.55"
      )
      .from(
        ".hero__actions",
        {
          opacity: 0,
          y: 20,
          duration: 0.6
        },
        "-=0.5"
      )
      .from(
        ".hero__trust-note",
        {
          opacity: 0,
          y: 12,
          duration: 0.5
        },
        "-=0.4"
      )
      .from(
        ".hero-right, .hero__badge",
        {
          opacity: 0,
          x: 32,
          duration: 0.9,
          ease: "power2.out"
        },
        "-=0.9"
      );

    /* ── ScrollTrigger reveals ── */
    if (typeof ScrollTrigger !== "undefined") {
      /* Section headers — slide up */
      gsap.utils
        .toArray(".section-eyebrow, .section-title, .section-lead")
        .forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            opacity: 0,
            y: 32,
            duration: 0.75,
            ease: "power2.out"
          });
        });

      /* Service cards — staggered fan */
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services__grid",
          start: "top 82%",
          once: true
        },
        opacity: 0,
        y: 48,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12
      });

      /* About text blocks */
      gsap.from(".about__text", {
        scrollTrigger: { trigger: ".about", start: "top 80%", once: true },
        opacity: 0,
        y: 28,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.15
      });

      /* Promise / about card */
      gsap.from(".about__card", {
        scrollTrigger: {
          trigger: ".about__card",
          start: "top 85%",
          once: true
        },
        opacity: 0,
        x: 40,
        duration: 0.85,
        ease: "power2.out"
      });

      /* Stat cards count-up feel */
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".about__stats",
          start: "top 88%",
          once: true
        },
        opacity: 0,
        scale: 0.94,
        duration: 0.55,
        ease: "back.out(1.4)",
        stagger: 0.1
      });

      /* Process steps — cascade */
      gsap.from(".process__step", {
        scrollTrigger: {
          trigger: ".process__steps",
          start: "top 82%",
          once: true
        },
        opacity: 0,
        y: 36,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.14
      });

      /* Contact form slide up */
      gsap.from(".contact__form", {
        scrollTrigger: {
          trigger: ".contact__form",
          start: "top 85%",
          once: true
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out"
      });

      /* Contact info items */
      gsap.from(".contact__info-item", {
        scrollTrigger: {
          trigger: ".contact__grid",
          start: "top 82%",
          once: true
        },
        opacity: 0,
        x: -24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      });
    }
  } else if (typeof ScrollReveal !== "undefined") {
    /* Fallback if GSAP not loaded */
    ScrollReveal().reveal(
      ".section-title, .section-eyebrow, .service-card, .about__text, .process__step",
      {
        delay: 150,
        duration: 800,
        distance: "36px",
        origin: "bottom",
        easing: "ease-out",
        interval: 100
      }
    );
  }

  /* =========================
     CONTACT FORM
  ========================= */

  const form = document.querySelector(".contact__form");

  if (form) {
    const submitBtn = form.querySelector("[type='submit']");
    const inputs = form.querySelectorAll(".contact__input, .contact__textarea");

    /* ── Live validation ── */
    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => {
        if (input.classList.contains("contact__input--error")) {
          validateField(input);
        }
      });
    });

    const validateField = (field) => {
      const empty = field.value.trim() === "";
      const badEmail =
        field.type === "email" &&
        !empty &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());

      const errorMsg = empty
        ? "This field is required."
        : badEmail
          ? "Please enter a valid email address."
          : null;

      setFieldState(field, errorMsg);
      return !errorMsg;
    };

    const setFieldState = (field, errorMsg) => {
      let msg = field.parentElement.querySelector(".contact__field-error");

      if (errorMsg) {
        field.classList.add("contact__input--error");
        field.classList.remove("contact__input--valid");
        if (!msg) {
          msg = document.createElement("p");
          msg.className = "contact__field-error";
          field.after(msg);
        }
        msg.textContent = errorMsg;
      } else {
        field.classList.remove("contact__input--error");
        field.classList.add("contact__input--valid");
        if (msg) msg.remove();
      }
    };

    /* ── Submit handler ── */
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const isNetlify =
        form.hasAttribute("netlify") || form.hasAttribute("data-netlify");

      /* Always validate first */
      let valid = true;
      inputs.forEach((input) => {
        if (input.required && !validateField(input)) valid = false;
      });

      if (!valid) {
        const firstError = form.querySelector(".contact__input--error");
        if (firstError) firstError.focus();
        return;
      }

      setFormLoading(true);

      if (isNetlify) {
        /* POST as URL-encoded — exactly what Netlify's bot expects */
        try {
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(form)).toString()
          });

          if (res.ok) {
            setFormSuccess();
          } else {
            setFormError();
          }
        } catch {
          setFormError();
        } finally {
          setFormLoading(false);
        }
      } else {
        /* Non-Netlify: swap the promise below for your own fetch() */
        try {
          await new Promise((r) => setTimeout(r, 1200));
          setFormSuccess();
        } catch {
          setFormError();
        } finally {
          setFormLoading(false);
        }
      }
    });

    const setFormLoading = (loading) => {
      if (!submitBtn) return;
      submitBtn.disabled = loading;
      submitBtn.textContent = loading ? "Sending…" : "Send Message";
    };

    const setFormSuccess = () => {
      form.innerHTML = `
        <div class="contact__success">
          <div class="contact__success-icon">✓</div>
          <h3 class="contact__success-title">Message sent!</h3>
          <p class="contact__success-text">
            Thanks for reaching out. I'll get back to you within one business day.
          </p>
        </div>
      `;
      if (typeof gsap !== "undefined") {
        gsap.from(".contact__success", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out"
        });
      }
    };

    const setFormError = () => {
      const existing = form.querySelector(".contact__form-error");
      if (existing) existing.remove();
      const err = document.createElement("p");
      err.className = "contact__form-error";
      err.textContent =
        "Something went wrong. Please try again or email us directly.";
      submitBtn.before(err);
    };
  }

  /* =========================
     SERVICE CARD HOVER TILT
  ========================= */

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const tiltX = +(y * 4).toFixed(2);
        const tiltY = -(x * 4).toFixed(2);
        card.style.transform = `translateY(-4px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        card.style.transition = "transform 0.1s ease";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
        card.style.transition = "transform 0.4s ease";
      });
    });
  }
});
