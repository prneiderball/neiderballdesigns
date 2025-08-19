const services = [
  {
    icon: "fa-paper-plane",
    title: "Starter Website",
    price: "Starting from $350",
    desc: "One-page responsive site with up to 5 content sections. Ideal for solo founders or local businesses needing a fast, professional presence.",
    category: "website",
  },
  {
    icon: "fa-layer-group",
    title: "Pro Website",
    price: "Starting from $500",
    desc: "Two-page site with smooth scroll, basic SEO, analytics, and contact page. Perfect for growing teams needing visibility and performance.",
    category: "website",
  },
  {
    icon: "fa-globe",
    title: "Custom Website",
    price: "Starting from $1,000",
    desc: "Fully custom site with premium effects, contact forms, social integration, and SEO optimization. Includes discovery session and revisions.",
    category: "website",
  },

  {
    icon: "fa-robot",
    title: "Starter Automations",
    price: "Starting from $500",
    desc: "Simple automations like form-to-CRM, auto-email responders, and calendar sync. Saves hours weekly. Includes 1 month support.",
    category: "automation",
  },
  {
    icon: "fa-gears",
    title: "Pro Automation Bundle",
    price: "Starting from $1,200",
    desc: "5 custom workflows with full setup, training, and 2-month support. Ideal for teams looking to streamline operations.",
    category: "automation",
  },
  {
    icon: "fa-repeat",
    title: "Ongoing Automation Care",
    price: "$300–$1,000/mo",
    desc: "Monthly updates, new automations, and priority support. Tailored to your evolving business needs.",
    category: "automation",
  },

  {
    icon: "fa-mobile-screen",
    title: "Custom App Build",
    price: "Starting from $2,500",
    desc: "Custom app or web tool with up to 3 core features, integrations, and 1 month of support. Ideal for internal tools or customer-facing apps.",
    category: "custom",
  },

  {
    icon: "fa-cloud",
    title: "Launch Care Plan",
    price: "$125/mo",
    desc: "Hosting, security, and essential upkeep for newly launched sites. Includes uptime monitoring and basic performance checks.",
    category: "support",
  },
  {
    icon: "fa-shield-halved",
    title: "Essential Tech Plan",
    price: "Starting from $350/mo",
    desc: "Lightweight monthly support: updates, minor fixes, and performance tweaks. Ideal for small businesses who want reliability without long-term commitments.",
    category: "support",
  },
  {
    icon: "fa-sitemap",
    title: "Automation & Growth Plan",
    price: " Starting from $800/mo",
    desc: "Hands-on workflow automation, software integration, and process improvements. Perfect for teams looking to save time, reduce errors, and scale efficiently.",
    category: "support",
  },

  {
    icon: "fa-rocket",
    title: "Embedded Tech Partner",
    price: "Starting from $2,100/mo",
    desc: "Full-service technical partnership with 25+ hrs/month of development, system builds, and dedicated support.",
    category: "consulting",
  },
  {
    icon: "fa-lightbulb",
    title: "Tech Strategy Session",
    price: "Starting from $45/hr",
    desc: "Focused consulting to review systems, suggest improvements, or plan tech adoption. Flexible sessions to fit your needs.",
    category: "consulting",
  },
];

// --- Render logic ---
const container = document.getElementById("services");
const buttons = document.querySelectorAll("#filter-buttons button");

// Render function
function renderServices(filter = "all") {
  container.innerHTML = ""; // clear old cards
  const filtered =
    filter === "all" ? services : services.filter((s) => s.category === filter);

  filtered.forEach(({ icon, title, price, desc }) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <div class="service-title">${title}</div>
      <div class="service-price">${price}</div>
      <p>${desc}</p>
    `;
    container.appendChild(card);
  });
}

// Initial render
renderServices();

// Filter button logic
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove .active from all buttons
    buttons.forEach((b) => b.classList.remove("active"));

    // Add .active to clicked button
    btn.classList.add("active");

    // Filter and re-render
    const filter = btn.getAttribute("data-filter");
    renderServices(filter);
  });
});
