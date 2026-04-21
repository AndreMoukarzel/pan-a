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

    const profileInner = `
      <img src="${inf.image}" alt="${inf.name}" width="80" height="80"
           onerror="this.style.visibility='hidden'">
      <p class="card-name">${inf.name}</p>`;

    const profile = inf.personalUrl
      ? `<a href="${inf.personalUrl}" target="_blank" rel="noopener noreferrer"
            class="influencer-link" aria-label="Visitar página de ${inf.name}">${profileInner}</a>`
      : profileInner;

    return `
      <div class="influencer-card">
        ${profile}
        <ul class="network-list">${networkItems}</ul>
      </div>`;
  }).join('');
}

// ─── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderPartners();
  renderInfluencers();
  initCounter();
});
