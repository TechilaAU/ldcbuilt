// =====================================================
// LDC BUILT — Global JS
// =====================================================

// ============ CURSOR ============
(function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animate() {
    const dx = mouseX - ringX;
    const dy = mouseY - ringY;
    ringX += dx * 0.15;
    ringY += dy * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  function bindHover() {
    document.querySelectorAll('a, button, .design-card, .region-card, [data-hover]')
      .forEach(el => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', () => {
          dot.classList.add('active');
          ring.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
          dot.classList.remove('active');
          ring.classList.remove('active');
        });
      });
  }
  bindHover();
  // Re-bind on dynamic content (e.g. filtering)
  window.bindCursor = bindHover;
})();

// ============ MOBILE NAV ============
(function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
    toggle.textContent = drawer.classList.contains('open') ? 'Close' : 'Menu';
  });
})();

// ============ SCROLL REVEAL (subtle) ============
(function initReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();
