const services = [
  // Websites
  {
    icon: "fa-globe",
    title: "Professional Website",
    price: "Starting from $500",
    desc: "A fully professional website built for your business. We handle the tech setup, styling, and launch, so you can focus on running your business.",
    features: [
      "One-page or multi-page site tailored to your needs",
      "Contact forms so customers can reach you easily",
      "Social media links integrated",
      "Optimized for search engines so customers can find you",
      "Styled to match your brand and vision"
    ],
    category: "website",
  },

  // Automations
  {
    icon: "fa-robot",
    title: "Basic Automation Setup",
    price: "Starting from $500",
    desc: "Automations handle forms, emails, and scheduling for you. Spend less time on repetitive tasks and more time with customers.",
    category: "automation",
  },
  {
    icon: "fa-gears",
    title: "Advanced Automation Package",
    price: "Starting from $1,200",
    desc: "Set up multiple daily tasks to run automatically. Comes with training and support so your team can focus on growing your business.",
    category: "automation",
  },
  {
    icon: "fa-repeat",
    title: "Ongoing Automation Support",
    price: "$300–$1,000/mo",
    desc: "We update your automations and add new ones as your business changes. You don’t have to worry about tech hassles.",
    category: "automation",
  },

  // Custom Apps
  {
    icon: "fa-mobile-screen",
    title: "Custom App or Tool",
    price: "Starting from $2,500",
    desc: "Build a web app or tool to help with your business tasks. We handle the setup and support so you can focus on results.",
    category: "custom",
  },

  // Support Plans
  {
    icon: "fa-cloud",
    title: "Launch Care Plan",
    price: "$125/mo",
    desc: "We host and maintain your site, keep it secure, and monitor performance. You don’t have to worry about tech details.",
    category: "support",
  },
  {
    icon: "fa-shield-halved",
    title: "Essential Tech Plan",
    price: "Starting from $350/mo",
    desc: "Regular updates, minor fixes, and checks to keep your systems running smoothly. Perfect for small businesses that want reliability without long-term commitments.",
    category: "support",
  },
  {
    icon: "fa-sitemap",
    title: "Automation & Growth Plan",
    price: "Starting from $800/mo",
    desc: "Hands-on help to automate tasks and improve processes. Saves time, reduces errors, and helps your business grow efficiently.",
    category: "support",
  },

  // Consulting
  {
    icon: "fa-rocket",
    title: "Embedded Tech Partner",
    price: "Starting from $2,100/mo",
    desc: "Full-service technical support with 25+ hours per month. We handle development and system updates while you focus on your business.",
    category: "consulting",
  },
  {
    icon: "fa-lightbulb",
    title: "Tech Strategy Session",
    price: "Starting from $45/hr",
    desc: "One-on-one consulting to review your systems or plan new tech. Flexible sessions to fit your schedule and needs.",
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
