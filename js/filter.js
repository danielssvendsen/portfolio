// File: js/filter.js
(() => {
  /**
   * Finds the associated filter list element following the filter-controls container.
   * @param {HTMLElement} ctrl - The filter control container element.
   * @returns {HTMLElement|null}
   */
  function getList(ctrl) {
    let el = ctrl.nextElementSibling;
    while (el && !el.matches?.('[data-filter-list]')) {
      el = el.nextElementSibling;
    }
    return el;
  }

  /**
   * Applies current filter button states to show/hide experience items.
   * @param {HTMLElement} ctrl - The filter control container element.
   */
  function apply(ctrl) {
    const list = getList(ctrl);
    if (!list) return;

    const buttons = Array.from(ctrl.querySelectorAll('button[data-filter]'));
    const activeFilters = buttons
      .filter(btn => btn.classList.contains('toggled'))
      .map(btn => btn.dataset.filter.toLowerCase());

    list.querySelectorAll('li[data-level]').forEach(li => {
      const level = (li.dataset.level || '').toLowerCase();
      li.style.display = activeFilters.includes(level) ? '' : 'none';
    });
  }

  /**
   * Initializes all filter controls on the page.
   */
  function initAll() {
    document.querySelectorAll('.filter-controls').forEach(ctrl => {
      ctrl.querySelectorAll('button[data-filter]').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.classList.contains('toggled')));
      });
      apply(ctrl);
    });
  }

  // Initialize on page load and after partials are dynamically loaded
  document.addEventListener('DOMContentLoaded', initAll);
  document.addEventListener('partials:loaded', initAll);

  // Toggle filter button states and re-apply filtering on click
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
