// File: js/theme-toggle.js
(() => {
  function init() {
    const root  = document.documentElement;      // <html>
    const btn   = document.getElementById('theme-toggle');
    if (!btn) return;
    const icon  = btn.querySelector('i');
    const label = btn.querySelector('.theme-label');

    const saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
    const domHasDark = root.classList.contains('dark');
    const prefersDark = window.matchMedia &&
                        window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Respect DOM first, then saved, then system, then light
    const initial = domHasDark ? 'dark'
                   : (saved ? saved
                   : (prefersDark ? 'dark' : 'light'));

    applyTheme(initial, { persist: false });
    updateUI(); // show target mode

    btn.addEventListener('click', () => {
      const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next, { persist: true });
      updateUI();
    });

    function getCurrentTheme() {
      return root.classList.contains('dark') ? 'dark' : 'light';
    }

    function applyTheme(theme, { persist } = { persist:true }) {
      if (theme === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
      if (persist) localStorage.setItem('theme', theme);
    }

    function updateUI() {
      const current = getCurrentTheme();
      const target  = current === 'dark' ? 'light' : 'dark';

      // Localized label (fallbacks)
      const lang    = window.I18N?.getLang?.() || 'no';
      const dict    = (window.I18N?.DICTS?.[lang] || {}).buttons?.theme || {};
      const text    = dict.label || (target === 'dark' ? 'Mørk modus' : 'Lyst modus');
      const aria    = dict.aria || 'Bytt tema';

      icon.className = target === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      label.textContent = text;
      btn.setAttribute('aria-label', aria);
      btn.setAttribute('aria-pressed', String(current === 'dark'));
    }

    // Re-sync label when language changes
    document.addEventListener('i18n:changed', () => updateUI());
  }

  // ✅ Run init after header/footer are loaded
  document.addEventListener('partials:loaded', init);
})();
