// File: js/filter.js
(() => {
  function initContainer(ctrl) {
    // Find the UL that this control should filter
    const scope = ctrl.closest('section, main, body') || document;
    const list =
      scope.querySelector('[data-filter-list]') ||
      scope.querySelector('ul.cert-list, ul.exp-list, ul.filter-list');

    if (!list) return;

    const buttons = Array.from(ctrl.querySelectorAll('button[data-filter]'));
    const items   = Array.from(list.querySelectorAll(':scope > li[data-level]'));

    const apply = (filter) => {
      const f = (filter || 'all').toLowerCase();
      items.forEach(li => {
        const lvl = (li.getAttribute('data-level') || '').toLowerCase();
        li.style.display = (f === 'all' || f === lvl) ? '' : 'none';
      });
    };

    // Initialize from the button that has .toggled (fallback: 'all')
    let active = buttons.find(b => b.classList.contains('toggled'))?.dataset.filter || 'all';
    apply(active);
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === active)));

    // Click handling
    ctrl.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      active = btn.dataset.filter;
      buttons.forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('toggled', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });
      apply(active);
    });
  }

  function initAll() {
    document.querySelectorAll('.filter-controls').forEach(initContainer);
  }

  // Run on DOM ready and after partials (just in case)
  document.addEventListener('DOMContentLoaded', initAll);
  document.addEventListener('partials:loaded', initAll);
})();
