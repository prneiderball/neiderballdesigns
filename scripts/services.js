const services = [
    {
    icon: 'fa-paper-plane',
    title: 'Starter Template',
    price: '$350',
    desc: 'up to 5 section landing page with clean design and 72-hour delivery.'
  },
  {
    icon: 'fa-layer-group',
    title: 'Pro Template',
    price: '$500',
    desc: 'two-page site with animations and 5-day delivery.'
  },
  {
    icon: 'fa-gem',
    title: 'Premium Template',
    price: '$750',
    desc: 'Fully responsive, premium JS/CSS, delivered in 7 days.'
  },
  {
    icon: 'fa-robot',
    title: 'Starter Automations',
    price: '$500',
    desc: '3 simple workflows like form to CRM with 1 month of support.'
  },
  {
    icon: 'fa-gears',
    title: 'Pro Automation Bundle',
    price: '$2,500',
    desc: '5–8 workflows, full setup, training & 2-month support.'
  },
  {
    icon: 'fa-repeat',
    title: 'Monthly Automation Care',
    price: '$300–1,000/mo',
    desc: 'Ongoing updates, new automations & priority support.'
  },
  {
    icon: 'fa-globe',
    title: 'Custom Website',
    price: '$1,500',
    desc: '5–7 page site, SEO-ready, responsive & easy to maintain.'
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Phone/Web App Build',
    price: '$4,500',
    desc: 'Custom app with key features, integrations & support.'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Starter Retainer',
    price: '$500/mo',
    desc: '5 hrs/month of essential support, strategy, and quick-turn fixes. Ideal for early-stage stability.'
  },
  {
    icon: 'fa-sitemap',
    title: 'Pro Retainer',
    price: '$1,000/mo',
    desc: '12 hrs/month for development, automation, and priority advisory. Perfect for growing teams.'
  },
  {
    icon: 'fa-rocket',
    title: 'Premium Retainer',
    price: 'Starting from $2100/mo',
    desc: '25+ hrs/month of full-service dev, tech strategy, and growth support. Your embedded tech team.'
  }
];

const container = document.getElementById('services');

services.forEach(({ icon, title, price, desc }) => {
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
