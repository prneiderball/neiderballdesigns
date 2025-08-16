const services = [
  {
    icon: "fa-paper-plane",
    title: "Starter Template",
    price: "$350",
    desc: "Launch fast with a mobile-friendly one-page site featuring up to 5 content sections. Includes logo and color customization, content placement, and delivery within 72 hours. Ideal for local businesses or solo founders who need a quick, professional presence.",
    category: "template",
  },
  {
    icon: "fa-layer-group",
    title: "Pro Template",
    price: "$500",
    desc: "A two-page website with smooth scroll animations, basic SEO setup, and Google Analytics integration. Includes homepage + service/contact page. Delivered in 5 days. Great for growing teams needing visibility and performance.",
    category: "template",
  },
  {
    icon: "fa-gem",
    title: "Premium Template",
    price: "$750",
    desc: "Multi-page site with premium JS/CSS effects, subtle animations, contact form with email notifications, and social media integration. Optimized for speed, SEO, and conversions. Delivered in 7 days. Perfect for brands ready to stand out.",
    category: "template",
  },
  {
    icon: "fa-rocket",
    title: "Starter Launch Pack",
    price: "$475",
    desc: "Bundle: Starter Template + 1 month of Launch Care + basic SEO audit. Ideal for solo founders who want to launch fast and stay secure.",
    category: "bundle",
  },
  {
    icon: "fa-robot",
    title: "Starter Automations",
    price: "$500",
    desc: "3 simple workflows like form-to-CRM, auto-email responder, or calendar sync. Includes 1 month of support. Save hours weekly with smart automation.",
    category: "automation",
  },
  {
    icon: "fa-gears",
    title: "Pro Automation Bundle",
    price: "$1,200",
    desc: "5 custom workflows, full setup, training, and 2-month support. Ideal for teams looking to streamline operations and scale efficiently.",
    category: "automation",
  },
  {
    icon: "fa-repeat",
    title: "Monthly Automation Care",
    price: "$300–1,000/mo",
    desc: "Ongoing updates, new automations, and priority support. Tailored to your evolving business needs.",
    category: "automation",
  },
  {
    icon: "fa-globe",
    title: "Custom Website",
    price: "Starting from $1,000",
    desc: "Fully custom websites built to match your brand, goals, and vision. Responsive, fast, and easy to manage. Includes discovery session and revision rounds.",
    category: "custom",
  },
  {
    icon: "fa-mobile-screen",
    title: "Phone/Web App Build",
    price: "Starting from $2,500",
    desc: "Custom app with 3 core features, integrations, and 1 month of support. Ideal for businesses needing internal tools or customer-facing apps.",
    category: "custom",
  },
  {
    icon: "fa-cloud",
    title: "Launch Care Plan",
    price: "$125/mo",
    desc: "Hosting, security, and essential upkeep for newly launched websites. Includes uptime monitoring and basic performance checks.",
    category: "maintenance",
  },
  {
    icon: "fa-shield-halved",
    title: "Growth Support Plan",
    price: "$500/mo",
    desc: "5 hrs/month of dev support and performance tuning. Ideal for businesses ready to optimize and grow.",
    category: "retainer",
  },
  {
    icon: "fa-sitemap",
    title: "Automation & Advisory Plan",
    price: "$1,000/mo",
    desc: "12 hrs/month for development, integrations, and strategic consulting. Perfect for scaling teams needing technical leadership.",
    category: "retainer",
  },
  {
    icon: "fa-rocket",
    title: "Embedded Tech Partner Plan",
    price: "Starting from $2,100/mo",
    desc: "25+ hrs/month of full-service development, advanced systems, and dedicated support. Your embedded technical partner for growth and innovation.",
    category: "retainer",
  },
];


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
