const services = [
  {
    icon: "fa-globe",
    title: "Professional Website",
    price: "Starting from $350",
    desc: "A fully professional website built for your business. We handle the tech setup, styling, and launch, so you can focus on running your business.",
    features: [
      "One-page or multi-page site tailored to your needs",
      "Contact forms so customers can reach you easily",
      "Social media links integrated",
      "Optimized for search engines so customers can find you",
      "Styled to match your brand and vision"
    ],
    category: "website"
  },

  {
    icon: "fa-robot",
    title: "Basic Automation Setup",
    price: "Starting from $500",
    desc: "Automations handle forms, emails, and scheduling for you. Spend less time on repetitive tasks and more time with customers.",
    category: "automation"
  },

  {
    icon: "fa-gears",
    title: "Advanced Automation Package",
    price: "Starting from $1,200",
    desc: "Set up multiple daily tasks to run automatically. Comes with training and support so your team can focus on growing your business.",
    category: "automation"
  },

  {
    icon: "fa-repeat",
    title: "Ongoing Automation Support",
    price: "$300–$1,000/mo",
    desc: "We update your automations and add new ones as your business changes.",
    category: "automation"
  },

  {
    icon: "fa-mobile-screen",
    title: "Custom App or Tool",
    price: "Starting from $2,500",
    desc: "Build a web app or tool to help with your business tasks.",
    category: "custom"
  },

  {
    icon: "fa-cloud",
    title: "Launch Care Plan",
    price: "$125/mo",
    desc: "Hosting, security, performance monitoring, and updates.",
    category: "support"
  },

  {
    icon: "fa-shield-halved",
    title: "Essential Tech Plan",
    price: "Starting from $350/mo",
    desc: "Regular updates and minor fixes to keep systems running smoothly.",
    category: "support"
  },

  {
    icon: "fa-sitemap",
    title: "Automation & Growth Plan",
    price: "Starting from $800/mo",
    desc: "Hands-on help automating processes and improving efficiency.",
    category: "support"
  },

  {
    icon: "fa-rocket",
    title: "Embedded Tech Partner",
    price: "Starting from $2,100/mo",
    desc: "25+ hours of development and system support per month.",
    category: "consulting"
  },

  {
    icon: "fa-lightbulb",
    title: "Tech Strategy Session",
    price: "Starting from $45/hr",
    desc: "One-on-one consulting to review or plan new technology systems.",
    category: "consulting"
  }
];

/* =========================
   DOM ELEMENTS
========================= */

const container = document.getElementById("services");
const buttons = document.querySelectorAll("#filter-buttons button");

/* =========================
   RENDER SERVICES
========================= */

function renderServices(filter = "all") {
  container.innerHTML = "";

  const filteredServices =
    filter === "all"
      ? services
      : services.filter((service) => service.category === filter);

  filteredServices.forEach((service) => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML = `
      <i class="fa-solid ${service.icon}"></i>
      <h3 class="service-card__title">${service.title}</h3>
      <div class="service-card__price">${service.price}</div>
      <p>${service.desc}</p>
    `;

    container.appendChild(card);
  });
}

/* =========================
   INITIAL RENDER
========================= */

renderServices();

/* =========================
   FILTER BUTTONS
========================= */

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    renderServices(filter);
  });
});
