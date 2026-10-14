const pageLinks = [
  ['herbs.html', 'Herbs'],
  ['remedies.html', 'Goods'],
  ['about.html', 'About'],
  ['blog.html', 'Journal'],
  ['contact.html', 'Find Joseph']
];

function currentPage() {
  const name = window.location.pathname.split('/').pop();
  return name || 'index.html';
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const active = currentPage();
    this.outerHTML = `
      <header class="site-header">
        <div class="site-shell header-inner">
          <a href="index.html" class="brand-link" aria-label="Joseph's Mystic Herbs home">
            <img class="brand-logo" src="joseph-logo-mark.png" alt="">
            <span>Joseph's Mystic Herbs</span>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
            <span></span><span></span><span></span>
          </button>
          <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
            ${pageLinks.map(([href, label]) => `<a href="${href}"${active === href ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
          </nav>
          <a href="https://wa.me/27824624970?text=Hi%20Joseph" class="button button-primary header-whatsapp">WhatsApp Joseph</a>
        </div>
      </header>`;

    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#site-nav');
    if (toggle && nav) {
      const closeMenu = () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
      };
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
        nav.classList.toggle('is-open', !open);
      });
      nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    }
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.outerHTML = `
      <footer class="site-footer">
        <div class="site-shell footer-grid">
          <div class="footer-mark">
            <img class="footer-logo" src="joseph-logo-mark.png" alt="">
            <span>Joseph's Mystic Herbs</span>
          </div>
          <div>
            <p>Aromatic botanicals · Buchu · Sage · Fish Hoek</p>
            <p><a href="tel:+27824624970">+27 82 462 4970</a> · <a href="mailto:josephs.mystic.herbs@gmail.com">josephs.mystic.herbs@gmail.com</a></p>
          </div>
          <div><p><a href="privacy-policy.html">Privacy Policy</a></p><p><a href="cookies-policy.html">Cookies Policy</a></p></div>
        </div>
        <div class="site-shell footer-bottom"><div class="divider"></div><p>© 2026 Joseph's Mystic Herbs. All rights reserved.</p></div>
      </footer>`;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
