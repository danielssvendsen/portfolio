// File: js/filter.js
(() => {
  function getList(ctrl) {
    // The list is always the next sibling after filter-controls
    let el = ctrl.nextElementSibling;
    while (el && !el.matches?.('[data-filter-list]')) {
      el = el.nextElementSibling;
    }
    return el;
  }

  function apply(ctrl) {
    const list = getList(ctrl);
    if (!list) return;

    const buttons = Array.from(ctrl.querySelectorAll('button[data-filter]'));
    const active = buttons
      .filter(b => b.classList.contains('toggled'))
      .map(b => b.dataset.filter.toLowerCase());

    list.querySelectorAll('li[data-level]').forEach(li => {
      const lvl = (li.dataset.level || '').toLowerCase();
      li.style.display = active.includes(lvl) ? '' : 'none';
    });
  }

  function initAll() {
    document.querySelectorAll('.filter-controls').forEach(ctrl => {
      ctrl.querySelectorAll('button[data-filter]').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.classList.contains('toggled')));
      });
      apply(ctrl);
    });
  }

  // Init once and after partial reloads
  document.addEventListener('DOMContentLoaded', initAll);
  document.addEventListener('partials:loaded', initAll);

  // Global delegated handler
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    const ctrl = btn.closest('.filter-controls');
    if (!ctrl) return;

    btn.classList.toggle('toggled');
    btn.setAttribute('aria-pressed', String(btn.classList.contains('toggled')));
    apply(ctrl);
  });
})();
