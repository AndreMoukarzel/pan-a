'use strict';

const networkMetaInf = {
  youtube:   { label: 'YouTube',   icon: 'fa-brands fa-youtube',   css: 'youtube'   },
  instagram: { label: 'Instagram', icon: 'fa-brands fa-instagram', css: 'instagram' },
  tiktok:    { label: 'TikTok',    icon: 'fa-brands fa-tiktok',    css: 'tiktok'    },
  twitch:    { label: 'Twitch',    icon: 'fa-brands fa-twitch',    css: 'twitch'    },
};

document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(window.location.search).get('id');

  if (!id) {
    window.location.replace('index.html');
    return;
  }

  const inf = influencers.find(i => i.slug === id);

  if (!inf) {
    window.location.replace('index.html');
    return;
  }

  // Update page title and meta description
  document.title = `${inf.name} — Pan-A`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', inf.bio || `${inf.name} — Influenciador Pan-A`);

  // Full image — set src in JS to avoid onerror firing on the empty src="" placeholder
  const img = document.getElementById('profile-full-image');
  img.alt = inf.name;
  img.onerror = () => { img.style.display = 'none'; };
  img.src = inf.fullImage || inf.image;

  // Name and bio
  document.getElementById('profile-name').textContent = inf.name;
  document.getElementById('profile-bio').textContent = inf.bio || '';

  // Social networks
  const networkList = document.getElementById('profile-networks');
  networkList.innerHTML = Object.entries(inf.networks)
    .filter(([, data]) => data !== null)
    .map(([key, data]) => {
      const m = networkMetaInf[key];
      return `<li>
        <a href="${data.url}" target="_blank" rel="noopener noreferrer"
           class="network-item ${m.css}" aria-label="${m.label} — ${data.size}">
          <span class="network-icon"><i class="${m.icon}" aria-hidden="true"></i></span>
          <span class="network-name">${m.label}</span>
          <span class="network-size">${data.size}</span>
        </a>
      </li>`;
    }).join('');

  // Media Kit — embed as iframe and show an "open in new tab" link
  if (inf.mediaKitUrl) {
    // Google Drive: replace /view with /preview for iframe embedding
    const embedUrl = inf.mediaKitUrl.replace(/\/view(\?.*)?$/, '/preview');

    const iframe = document.getElementById('mediakit-iframe');
    iframe.src = embedUrl;
    iframe.title = `Media Kit de ${inf.name}`;

    document.getElementById('mediakit-embed').hidden = false;

    const link = document.getElementById('profile-mediakit-link');
    link.href = inf.mediaKitUrl;
    link.hidden = false;
  }
});
