/* ============================================================
   NEIDER-BALL DESIGNS — services.js
   All behaviour for services.html
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     DATA
  ========================= */

  const services = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: "Professional Website",
      price: "Starting from $350",
      priceNote: "One-time project fee",
      category: "website",
      featured: false,
      desc: "Your business deserves a website that works as hard as you do. I'll build a fast, mobile-friendly site styled to your brand — with contact forms, social links, and search engine optimization built in from the start. You show up online; I handle everything that gets you there.",
      features: [
        "One-page or multi-page site tailored to your needs",
        "Contact forms so customers can reach you easily",
        "Social media links integrated",
        "Optimized for search engines so customers can find you",
        "Styled to match your brand and vision"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      title: "Basic Automation Setup",
      price: "Starting from $500",
      priceNote: "One-time setup fee",
      category: "automation",
      featured: true,
      desc: "Stop doing the same thing twice. This package connects your forms, emails, and scheduling tools so they talk to each other automatically. You get more done without adding hours — and training is included so you actually know how it works.",
      features: [
        "Automated form responses and lead follow-ups",
        "Email sequences triggered by customer actions",
        "Appointment or scheduling automation",
        "Full training so your team can manage it",
        "30 days of post-launch support included"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/></svg>`,
      title: "Advanced Automation Package",
      price: "Starting from $1,200",
      priceNote: "One-time project fee",
      category: "automation",
      featured: false,
      desc: "When your business has multiple moving parts that all need to stay in sync, this is the package. I'll map out and automate several daily workflows — invoicing, internal notifications, reporting, CRM updates — and train your team to own it going forward.",
      features: [
        "Multiple interconnected workflows automated",
        "CRM, invoicing, or reporting integrations",
        "Internal team notification systems",
        "Full team training and documentation",
        "60 days of post-launch support included"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z"/><path d="M9 22v-4h6v4M8 6h.01M8 10h.01M8 14h.01M12 6h4M12 10h4M12 14h4"/></svg>`,
      title: "Ongoing Automation Support",
      price: "$300 \u2013 $1,000/mo",
      priceNote: "Monthly retainer \u2014 cancel anytime",
      category: "automation",
      featured: false,
      desc: "Your business changes, and your automations should too. This retainer keeps your systems updated as you add new tools, change processes, or grow your team. Think of it as a standing agreement for your tech to keep working the way it should.",
      features: [
        "Monthly automation updates and tune-ups",
        "New workflow builds as your business evolves",
        "Bug fixes and integration maintenance",
        "Priority response within one business day",
        "Monthly report on what's running and what changed"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
      title: "Custom App or Tool",
      price: "Starting from $2,500",
      priceNote: "Scoped and quoted per project",
      category: "custom",
      featured: false,
      desc: "Sometimes off-the-shelf software just doesn't fit. If you need a booking portal, internal dashboard, client-facing tool, or anything custom-built for how your business actually works — I'll scope it, build it, and hand it off with full documentation so your team can run it.",
      features: [
        "Scoped to your exact business requirements",
        "Web-based \u2014 works on any device, no installs",
        "Admin panel so you control your own data",
        "Full handover with documentation and training",
        "Ongoing support available via retainer"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: "Launch Care Plan",
      price: "$125/mo",
      priceNote: "Monthly \u2014 ideal for newly launched sites",
      category: "support",
      featured: false,
      desc: "Your website is live — now it needs to stay that way. This plan covers hosting, security monitoring, regular backups, and software updates so nothing breaks quietly in the background. It's the peace-of-mind plan for business owners who'd rather focus on their work than their website.",
      features: [
        "Managed hosting and SSL certificate",
        "Daily backups with 30-day restore window",
        "Security scans and uptime monitoring",
        "Software and plugin updates handled for you",
        "One minor content update per month included"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
      title: "Essential Tech Plan",
      price: "Starting from $350/mo",
      priceNote: "Monthly retainer",
      category: "support",
      featured: false,
      desc: "More than basic maintenance — this plan keeps your whole tech stack healthy. Regular updates, minor fixes, and a dedicated point of contact means small issues get caught before they become expensive ones. Right for businesses with a live website and at least one active software system.",
      features: [
        "Everything in the Launch Care Plan",
        "Minor bug fixes and content updates (up to 3/mo)",
        "Performance reviews and speed optimizations",
        "Proactive monitoring across connected tools",
        "Monthly summary of changes and health status"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: "Automation & Growth Plan",
      price: "Starting from $800/mo",
      priceNote: "Monthly retainer",
      category: "support",
      featured: false,
      desc: "For businesses that are actively growing and need their systems to keep up. Each month we review what's slowing you down, build or adjust automations to fix it, and make sure everything is running efficiently. It's hands-on, strategic help — not just maintenance.",
      features: [
        "Everything in the Essential Tech Plan",
        "Up to 2 new automation builds or major updates per month",
        "Monthly strategy call to prioritize improvements",
        "Workflow documentation kept up to date",
        "Scales with your business \u2014 hours flex as needed"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/><circle cx="18" cy="5" r="3"/></svg>`,
      title: "Embedded Tech Partner",
      price: "Starting from $2,100/mo",
      priceNote: "25+ hours/mo \u2014 like a part-time CTO",
      category: "consulting",
      featured: true,
      desc: "For businesses that need serious, consistent technical support without the cost of a full-time hire. You get 25+ hours of hands-on development and system work per month — building new features, integrating tools, solving problems before they surface. I show up like a member of your team.",
      features: [
        "25+ dedicated hours of development per month",
        "Priority access and same-day response",
        "Full-stack development and systems work",
        "Proactive recommendations, not just ticket-closing",
        "Monthly planning session to align with business goals"
      ]
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
      title: "Tech Strategy Session",
      price: "Starting from $45/hr",
      priceNote: "Billed hourly \u2014 no minimum commitment",
      category: "consulting",
      featured: false,
      desc: "Sometimes you just need an honest second opinion. Bring your questions, your current setup, or a new idea — and I'll help you think through it clearly. No upselling, no obligation. Just straight answers on what makes sense for your business and what doesn't.",
      features: [
        "One-on-one session by video or phone",
        "Review of current tools, systems, or plans",
        "Honest recommendations \u2014 including when to do nothing",
        "Written summary of findings and next steps",
        "Book single sessions or a series as needed"
      ]
    }
  ];

  const categoryLabels = {
    website: "Websites",
    automation: "Automation",
    custom: "Custom Builds",
    support: "Care & Support",
    consulting: "Consulting"
  };

  /* =========================
     DOM REFS
  ========================= */

  const grid = document.getElementById("services-grid");
  const countEl = document.getElementById("services-count");
  const buttons = document.querySelectorAll(".filter-btn");

  /* =========================
     RENDER
  ========================= */

  function renderServices(filter = "all") {
    grid.innerHTML = "";

    const filtered =
      filter === "all"
        ? services
        : services.filter((s) => s.category === filter);

    const total = filtered.length;

    countEl.textContent =
      filter === "all"
        ? `Showing all ${total} services`
        : `Showing ${total} service${total !== 1 ? "s" : ""} in ${categoryLabels[filter] || filter}`;

    if (total === 0) {
      grid.innerHTML = `<div class="services-empty">No services in this category yet.</div>`;
      return;
    }

    if (filter === "all") {
      /* Group by category with section labels */
      const order = [
        "website",
        "automation",
        "custom",
        "support",
        "consulting"
      ];
      const grouped = {};
      order.forEach((cat) => {
        grouped[cat] = [];
      });
      services.forEach((s) => {
        if (grouped[s.category]) grouped[s.category].push(s);
      });

      order.forEach((cat) => {
        if (!grouped[cat].length) return;

        const labelEl = document.createElement("div");
        labelEl.className = "category-label";
        labelEl.innerHTML = `
          <span class="category-label__text">${categoryLabels[cat]}</span>
          <span class="category-label__line"></span>
        `;
        grid.appendChild(labelEl);

        grouped[cat].forEach((s) => grid.appendChild(buildCard(s)));
      });
    } else {
      filtered.forEach((s) => grid.appendChild(buildCard(s)));
    }

    /* Animate newly rendered cards */
    if (typeof gsap !== "undefined") {
      gsap.from(".service-card", {
        opacity: 0,
        y: 32,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.08,
        clearProps: "all"
      });
    }
  }

  /* =========================
     CARD BUILDER
  ========================= */

  function buildCard(s) {
    const card = document.createElement("article");
    card.className =
      "service-card" + (s.featured ? " service-card--featured" : "");
    card.setAttribute("aria-label", s.title + " service");

    const featuredBadge = s.featured
      ? `<span class="service-card__badge">Popular</span>`
      : "";

    const iconClass = s.featured
      ? "service-card__icon service-card__icon--trust"
      : "service-card__icon";

    const featuresList = s.features
      ? `<ul class="service-card__list">
          ${s.features.map((f) => `<li>${f}</li>`).join("")}
         </ul>`
      : "";

    const ctaClass = s.featured
      ? "btn btn--trust btn--full"
      : "btn btn--ghost btn--full";

    const priceNote = s.priceNote
      ? `<p class="service-card__price-note">${s.priceNote}</p>`
      : "";

    card.innerHTML = `
      ${featuredBadge}
      <div class="${iconClass}" aria-hidden="true">${s.icon}</div>
      <div class="service-card__body">
        <span class="service-card__tag tag--${s.category}">
          ${categoryLabels[s.category]}
        </span>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__price">
          <span class="price">${s.price}</span>
        </p>
        <hr class="service-card__divider" />
        <p class="service-card__desc">${s.desc}</p>
        ${featuresList}
      </div>
      <div class="service-card__cta">
        <a href="/#contact" class="${ctaClass}">Get a Quote</a>
        ${priceNote}
      </div>
    `;

    return card;
  }

  /* =========================
     FILTER BUTTONS
  ========================= */

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderServices(btn.dataset.filter);

      /* Scroll to grid on mobile so user sees the result */
      if (window.innerWidth < 768) {
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* =========================
     INITIAL RENDER
  ========================= */

  renderServices();

  /* =========================
     HEADER SCROLL STATE
  ========================= */

  const header = document.querySelector(".header");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("header--scrolled", window.scrollY > 12);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* =========================
     MOBILE NAV
  ========================= */

  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

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
});
