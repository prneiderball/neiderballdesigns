const services = [
  {
    icon: 'fa-paper-plane',
    title: 'Starter Template',
    price: '$350',
    desc: 'Up to 5 section landing page with clean design and 72-hour delivery.',
    category: 'template'
  },
  {
    icon: 'fa-layer-group',
    title: 'Pro Template',
    price: '$500',
    desc: 'Two-page site with animations and 5-day delivery.',
    category: 'template'
  },
  {
    icon: 'fa-gem',
    title: 'Premium Template',
    price: '$750',
    desc: 'Fully responsive, premium JS/CSS, delivered in 7 days.',
    category: 'template'
  },
  {
    icon: 'fa-robot',
    title: 'Starter Automations',
    price: '$500',
    desc: '3 simple workflows like form to CRM with 1 month of support.',
    category: 'automation'
  },
  {
    icon: 'fa-gears',
    title: 'Pro Automation Bundle',
    price: '$2,500',
    desc: '5–8 workflows, full setup, training & 2-month support.',
    category: 'automation'
  },
  {
    icon: 'fa-repeat',
    title: 'Monthly Automation Care',
    price: '$300–1,000/mo',
    desc: 'Ongoing updates, new automations & priority support.',
    category: 'automation'
  },
  {
    icon: 'fa-globe',
    title: 'Custom Website',
    price: 'Starting from $1,000',
    desc: 'Custom websites built to match your brand, goals, and vision—fully responsive, fast, and easy to manage.',
    category: 'custom'
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Phone/Web App Build',
    price: '$4,500',
    desc: 'Custom app with 3 key features, integrations & 1 month of support.',
    category: 'custom'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Starter Retainer',
    price: '$500/mo',
    desc: '5 hrs/month of essential support, strategy, and quick-turn fixes. Ideal for early-stage stability.',
    category: 'retainer'
  },
  {
    icon: 'fa-sitemap',
    title: 'Pro Retainer',
    price: '$1,000/mo',
    desc: '12 hrs/month for development, automation, and priority advisory. Perfect for growing teams.',
    category: 'retainer'
  },
  {
    icon: 'fa-rocket',
    title: 'Premium Retainer',
    price: 'Starting from $2100/mo',
    desc: '25+ hrs/month of full-service dev, tech strategy, and growth support. Your embedded software engineer.',
    category: 'retainer'
  }
];

const container = document.getElementById('services');
const buttons = document.querySelectorAll('#filter-buttons button');

// Render function
function renderServices(filter = 'all') {
  container.innerHTML = ''; // clear old cards
  const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);

  filtered.forEach(({ icon, title, price, desc }) => {
    const card = document.createElement('div');
    card.className = 'service-card';
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
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove .active from all buttons
    buttons.forEach(b => b.classList.remove('active'));

    // Add .active to clicked button
    btn.classList.add('active');

    // Filter and re-render
    const filter = btn.getAttribute('data-filter');
    renderServices(filter);
  });
});
