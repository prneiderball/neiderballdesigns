const services = [
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
    title: 'Basic Website',
    price: '$1,500',
    desc: '5–7 page site, SEO-ready, responsive & easy to maintain.'
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Phone/Web App MVP Build',
    price: '$4,500',
    desc: 'Custom app with key features, integrations & support.'
  },
  {
    icon: 'fa-laptop-code',
    title: 'Monthly Dev Plan',
    price: '$1,200/mo',
    desc: 'Hosting support, bug fixes, and small features (~20 hrs).'  
  },
  {
    icon: 'fa-shield-halved',
    title: 'Tech Watchdog (Retainer)',
    price: '$900/mo',
    desc: '5 hrs/month for strategy, fixes, and fast email support.'
  },
  {
    icon: 'fa-sitemap',
    title: 'Tech Operations (Retainer)',
    price: '$1,800/mo',
    desc: '12 hrs/month of dev work, automation & priority response.'
  },
  {
    icon: 'fa-rocket',
    title: 'Growth Accelerator (Retainer)',
    price: '$3,200/mo',
    desc: '25+ hrs/month: full-service tech & growth support.'
  },
  {
    icon: 'fa-paper-plane',
    title: 'Starter Template',
    price: '$400',
    desc: '3–4 section landing page with clean design and 72-hour delivery.'
  },
  {
    icon: 'fa-layer-group',
    title: 'Pro Template',
    price: '$900',
    desc: 'Multi-page site with animations and 5-day delivery.'
  },
  {
    icon: 'fa-gem',
    title: 'Top Tier Template',
    price: '$1,500',
    desc: 'Fully responsive, premium JS/CSS, delivered in 7 days.'
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
