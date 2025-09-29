// File: js/partials.js
(() => {
  const HEADER_TARGET = document.getElementById('site-header');
  const FOOTER_TARGET = document.getElementById('site-footer');
  const load = async (path) => {
    const res = await fetch(path, { credentials: 'same-origin' });
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return res.text();
  };

  const setActiveNav = (root) => {
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const links = root.querySelectorAll('nav a[href]');
    links.forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === current) a.classList.add('active');
    });
  };

  (async () => {
    try {
      if (HEADER_TARGET) {
        HEADER_TARGET.innerHTML = await load('partials/header.html');
        setActiveNav(HEADER_TARGET);
      }
      if (FOOTER_TARGET) {
        FOOTER_TARGET.innerHTML = await load('partials/footer.html');
      }

      // 🔥 Notify that partials are ready
      document.dispatchEvent(new Event("partials:loaded"));
    } catch (err) {
      console.error(err);
    }
  })();
})();
