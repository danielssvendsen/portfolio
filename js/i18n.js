(function () {
  const DEFAULT_LANG = 'no'; // Norwegian by default

  // ---- dict helpers ----
  function getDicts() {
    const I = window.I18N || {};
    return { en: (I.en || {}), no: (I.no || {}) };
  }
  function haveDict(lang) {
    const D = getDicts(); return D[lang] && Object.keys(D[lang]).length > 0;
  }
  function getLang()  { return localStorage.getItem('lang') || DEFAULT_LANG; }
  function setLang(l) { localStorage.setItem('lang', l); }

  function t(path, lang = getLang()) {
    const D = getDicts();
    const dict = (D[lang] && Object.keys(D[lang]).length) ? D[lang] : (D[DEFAULT_LANG] || {});
    return path.split('.').reduce((acc, k) => (acc != null ? acc[k] : null), dict);
  }

  // ---- core render ----
  function applyI18n(lang = getLang(), root = document) {
    // text nodes
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (typeof val === 'string') el.textContent = val;
    });

    // attribute mappings
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const map = (el.getAttribute('data-i18n-attr') || '')
        .split(',').map(s => s.trim()).filter(Boolean);
      map.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        const val = t(key, lang);
        if (attr && typeof val === 'string') el.setAttribute(attr, val);
      });
    });

    // lists
    root.querySelectorAll('[data-i18n-list]').forEach(el => {
      const key = el.getAttribute('data-i18n-list');
      const arr = t(key, lang);
      if (Array.isArray(arr)) {
        el.innerHTML = '';
        arr.forEach(item => {
          const li = document.createElement('li');
          li.textContent = String(item);
          el.appendChild(li);
        });
      }
    });

    // <title data-i18n="...">
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const key = titleEl.getAttribute('data-i18n');
      const val = t(key, lang);
      if (typeof val === 'string') document.title = val;
    }

    // language toggle: show TARGET code (EN/NO) and localized aria
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      const target = lang === 'en' ? 'no' : 'en';
      const labelEl = langBtn.querySelector('.lang-label');
      if (labelEl) labelEl.textContent = target.toUpperCase();

      // use your existing i18n key
      const aria = t('buttons.lang.aria', lang) ||
                   (target === 'en' ? 'Switch to English' : 'Bytt til norsk');
      langBtn.setAttribute('aria-label', aria);
    }

    // reflect on <html>
    document.documentElement.setAttribute('lang', lang);

    // notify listeners (theme toggle, etc.)
    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
  }

  // ---- readiness guard ----
  function whenDictsReady(lang, cb, timeoutMs = 2000) {
    const start = performance.now();
    (function tick() {
      if (haveDict(lang)) return cb();
      if (performance.now() - start > timeoutMs) return cb(); // fallback
      setTimeout(tick, 0);
    })();
  }

  // ---- mutation observer: translate late-inserted content ----
  let observer;
  function startObserver() {
    if (observer) return;
    observer = new MutationObserver((mutations) => {
      const lang = getLang();
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return;
          if (
            node.hasAttribute?.('data-i18n') ||
            node.hasAttribute?.('data-i18n-attr') ||
            node.querySelector?.('[data-i18n], [data-i18n-attr], [data-i18n-list]')
          ) {
            applyI18n(lang, node);
            // also (re)wire the lang button if header was injected
            wireLangButton();
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ---- (re)wire the language button whenever it appears ----
  function wireLangButton() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    // remove previous handler if any to avoid duplicates
    btn.onclick = null;
    btn.addEventListener('click', () => {
      const next = getLang() === 'en' ? 'no' : 'en';
      setLang(next);
      applyI18n(next);
    });
  }

  // ---- public api ----
  window.I18N = Object.assign(window.I18N || {}, { getLang, setLang, applyI18n, t });

  // ---- boot ----
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();

    // 1) Wait for dicts, then render
    whenDictsReady(lang, () => applyI18n(lang));

    // 2) (Re)wire the button now (if present) and after partials load
    wireLangButton();
    document.addEventListener('partials:loaded', () => {
      wireLangButton();
      applyI18n(getLang());
    });

    // 3) Observe dynamic nodes (header/footer injections, etc.)
    startObserver();
  });
})();
