// File: js/boot.js
(function () {
  try {
    // === THEME ===
    var theme = localStorage.getItem('theme') || 'dark'; // always default dark
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // === LANGUAGE ===
    var lang = localStorage.getItem('lang') || 'no'; // always default Norwegian
    document.documentElement.setAttribute('lang', lang);

  } catch (_) {}
})();
