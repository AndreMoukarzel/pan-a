'use strict';

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function formatSize(n) {
  if (n >= 1_000_000) {
    const v = n / 1_000_000;
    return (Number.isInteger(v) ? v : v.toFixed(1)).toString().replace('.', ',') + 'M';
  }
  if (n >= 1_000) return Math.round(n / 1_000) + ' mil';
  return n.toString();
}

function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  (function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = formatSize(Math.round(eased * target));
    if (t < 1) requestAnimationFrame(step);
  })(start);
}

// ─── PARTNERS ─────────────────────────────────────────────────────────────────

function renderPartners() {
  const grid = document.getElementById('partners-grid');
  if (!grid) return;

  const cardHTML = partners.map(p => `
    <div class="partner-card">
      <img src="${p.image}" alt="${p.name}" width="72" height="72"
           onerror="this.style.visibility='hidden'">
      <p class="card-name">${p.name}</p>
      <p class="card-size">${formatSize(p.size)} seguidores</p>
    </div>
  `).join('');

  // Duplicate cards so the marquee loops seamlessly
  grid.innerHTML = cardHTML + cardHTML;

  // Scale duration to number of partners (~60px/s, each card ~224px wide)
  const duration = Math.max((partners.length * 224) / 60, 8);
  grid.style.animationDuration = duration.toFixed(1) + 's';
}

function initCounter() {
  const el = document.getElementById('total-reach');
  if (!el) return;

  const total = partners.reduce((sum, p) => sum + p.size, 0);
  el.textContent = '0';

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      animateCounter(el, total);
      observer.disconnect();
    }
  }, { threshold: 0.6 });

  observer.observe(el);
}

// ─── INFLUENCERS ──────────────────────────────────────────────────────────────

const networkMeta = {
  youtube:   { label: 'YouTube',   icon: 'fa-brands fa-youtube',   css: 'youtube'   },
  instagram: { label: 'Instagram', icon: 'fa-brands fa-instagram', css: 'instagram' },
  tiktok:    { label: 'TikTok',    icon: 'fa-brands fa-tiktok',    css: 'tiktok'    },
  twitch:    { label: 'Twitch',    icon: 'fa-brands fa-twitch',    css: 'twitch'    },
};

function renderInfluencers() {
  const grid = document.getElementById('influencers-grid');
  if (!grid) return;

  grid.innerHTML = influencers.map(inf => {
    const networkItems = Object.entries(inf.networks)
      .filter(([, data]) => data !== null)
      .map(([key, data]) => {
        const m = networkMeta[key];
        return `<li>
          <a href="${data.url}" target="_blank" rel="noopener noreferrer"
             class="network-item ${m.css}" aria-label="${m.label} — ${data.size}">
            <span class="network-icon"><i class="${m.icon}" aria-hidden="true"></i></span>
            <span class="network-name">${m.label}</span>
            <span class="network-size">${data.size}</span>
          </a>
        </li>`;
      }).join('');

    return `
      <div class="influencer-card">
        <img src="${inf.image}" alt="${inf.name}" width="80" height="80"
             onerror="this.style.visibility='hidden'">
        <p class="card-name">${inf.name}</p>
        <ul class="network-list">${networkItems}</ul>
        <a href="influencer.html?id=${inf.slug}" class="btn-ver-perfil">
          Ver perfil
        </a>
      </div>`;
  }).join('');
}

// ─── NAV DROPDOWNS ────────────────────────────────────────────────────────────

function wireDropdownToggle(trigger) {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
  });
}

function populateNavDropdown() {
  const menu = document.getElementById('influencers-nav-menu');
  if (!menu) return;

  menu.innerHTML = influencers.map(inf =>
    `<li><a href="influencer.html?id=${inf.slug}">${inf.name}</a></li>`
  ).join('');

  const trigger = menu.previousElementSibling;
  if (trigger) wireDropdownToggle(trigger);
}

function populateBlogDropdown() {
  const menu = document.getElementById('blog-nav-menu');
  if (!menu || typeof blogPosts === 'undefined' || blogPosts.length === 0) return;

  const base = menu.dataset.base || '';
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  menu.innerHTML = sorted.map(post =>
    `<li><a href="${base}post.html?slug=${post.slug}">${post.title}</a></li>`
  ).join('');

  const trigger = menu.previousElementSibling;
  if (trigger) wireDropdownToggle(trigger);
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  if (typeof config !== 'undefined' && config.formspreeId) {
    form.action = `https://formspree.io/f/${config.formspreeId}`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = 'Enviando…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        document.getElementById('form-success').hidden = false;
        btn.textContent = 'Enviado!';
      } else {
        btn.disabled = false;
        btn.textContent = 'Enviar mensagem';
        alert('Ocorreu um erro. Por favor, tente novamente ou envie um e-mail para contato@pana-content.com');
      }
    } catch {
      btn.disabled = false;
      btn.textContent = 'Enviar mensagem';
      alert('Ocorreu um erro. Por favor, tente novamente ou envie um e-mail para contato@pana-content.com');
    }
  });
}

// ─── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderPartners();
  renderInfluencers();
  initCounter();
  populateNavDropdown();
  populateBlogDropdown();
  initContactForm();

  // Close all open dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown-trigger[aria-expanded="true"]')
      .forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  });
});
